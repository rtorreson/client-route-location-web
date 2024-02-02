/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Contact } from '../types';
import { useContactStore } from '../context/client.context';
import { addContact, listContact } from '../service';

export const useAddContactQuery = () => {
  const queryClient = useQueryClient();
  const contactStore = useContactStore();
  const navigate = useNavigate();

  const addContactMutation = useMutation(
    async (data: Contact): Promise<Contact> => {
      await contactStore.addContact(data);
      return await addContact(data);
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries('contact');
        toast.success('Novo contato adicionado.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        navigate('/');
      },
      onError: (error: any) => {
        console.error(error);
      },
    }
  );

  return {
    addContact: (data: Contact) => addContactMutation.mutateAsync(data),
    isLoading: addContactMutation.isLoading,
  };
};

export const useListContactQuery = () => {
  const contactStore = useContactStore();

  const { data: contacts, isLoading } = useQuery('listContacts', listContact, {
    onSuccess: (value) => {
      contactStore.addContact(value);
      return value;
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  return {
    contacts,
    isLoading,
  };
};
