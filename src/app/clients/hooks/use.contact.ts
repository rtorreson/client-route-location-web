/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Contact } from '../types';
import { useContactStore } from '../context/client.context';
import { addContact, listContact, listRoutes } from '../service';

export const useAddContactQuery = () => {
  const contactStore = useContactStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addContactMutation = useMutation(
    async (data: Contact): Promise<Contact> => {
      await contactStore.addContact(data);
      return await addContact(data);
    },
    {
      onSuccess: async () => {
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

        queryClient.fetchQuery('listContacts');

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
    onError: (error: unknown) => {
      console.error(error);
    },
  });

  return {
    contacts,
    isLoading,
  };
};

export const useListContactRoutesQuery = () => {
  const { data: contacts, isLoading } = useQuery('listRoutes', listRoutes, {
    onSuccess: (value) => {
      return value;
    },
    onError: (error: unknown) => {
      console.error(error);
    },
  });

  return {
    contacts,
    isLoading,
  };
};
