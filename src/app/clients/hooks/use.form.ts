import { useForm, SubmitHandler } from 'react-hook-form';
import { Contact } from '../types';

function formatPhoneNumber(value: string): string {
  const cleanedValue = value.replace(/\D/g, '');
  const truncatedValue = cleanedValue.slice(0, 11);
  return truncatedValue.replace(/(\d{2})(\d{9})/, '$1 $2');
}

export const useAddContactForm = (onSubmit: SubmitHandler<Contact>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    setValue,
    watch,
  } = useForm<Contact>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedValue = formatPhoneNumber(event.target.value);
    setValue('cellphone', formattedValue);
  };

  console.log(watch());

  return {
    register: {
      email: register('email', {
        required: { value: true, message: 'Email é obrigatório' },

        validate: (value: string): boolean | string => {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || !value) {
            setError('email', {
              type: 'manual',
              message: 'E-mail é obrigatório e deve ser um endereço válido',
            });
            return false;
          }
          return value === getValues('email') || 'Ocorreu um erro';
        },
      }),

      name: register('name', {
        required: { value: true, message: 'Nome é obrigatório' },
      }),
      cellphone: register('cellphone', {
        required: { value: true, message: 'Numero de telefone é obrigatório' },
        maxLength: 12,
        minLength: 11,
        validate: (value: string): boolean | string => {
          if (/^\+\d{2} \d{2} \d{9}$/.test(value) || !value) {
            setError('cellphone', {
              type: 'manual',
              message:
                'Numero de celular é obrigatório e deve ser um numero válido',
            });
            return false;
          }
          return value === getValues('cellphone') || 'Ocorreu um erro';
        },
      }),
      coordinates: {
        x: register('coordinates.x', {
          required: { value: true, message: 'Coordenada X é obrigatória' },
          minLength: 2,
          maxLength: 8,
          validate: (value: number): boolean | string => {
            if (isNaN(value) || value < 0) {
              setError('coordinates.x', {
                type: 'manual',
                message: 'Coordenada X deve ser um número positivo',
              });
              return false;
            }
            return true;
          },
        }),
        y: register('coordinates.y', {
          required: { value: true, message: 'Coordenada Y é obrigatória' },
          minLength: 2,
          maxLength: 8,
          validate: (value: number): boolean | string => {
            if (isNaN(value) || value < 0) {
              setError('coordinates.y', {
                type: 'manual',
                message: 'Coordenada Y deve ser um número positivo',
              });
              return false;
            }
            return true;
          },
        }),
      },
    },
    handleInputChange,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    watch,
  };
};
