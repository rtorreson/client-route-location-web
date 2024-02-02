import { FieldErrors, FieldValues } from 'react-hook-form';
import { Button, Input, Label } from '@/shared/components';
import { Fragment } from 'react';

type ModalProps<T extends FieldValues> = {
  errors: FieldErrors<Partial<T>>;
  handleSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  switchToogleModal: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: any;
};

export const FormModal = ({
  register,
  switchToogleModal,
  handleSubmit,
  errors,
  handleInputChange,
}: ModalProps<FieldValues>): JSX.Element => {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await handleSubmit();
      switchToogleModal();
    } catch (error) {
      console.error('Erro ao submeter o formulário:', error);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleFormSubmit} style={{ display: 'grid', gap: '4vh' }}>
        <Label $display='flex' $direction='column' $width='40%'>
          Nome:
          <Input type='text' {...register.name}></Input>
        </Label>
        <Label $display='flex' $direction='column' $width='40%'>
          E-mail:
          <Input type='text' {...register.email}></Input>
        </Label>
        <Label $display='flex' $direction='column' $width='40%'>
          Celular:
          <Input
            type='text'
            {...register.cellphone}
            onChange={handleInputChange}
          ></Input>
        </Label>
        <Label $display='flex' $direction='column' $width='40%'>
          Coordenada X:
          <Input type='text' {...register.coordinates.x}></Input>
        </Label>
        <Label $display='flex' $direction='column' $width='40%'>
          Coordenada Y:
          <Input type='text' {...register.coordinates.y}></Input>
        </Label>
        <Button type='submit'>Salvar Cliente</Button>
      </form>

      {Object.keys(errors).length > 0 && (
        <p style={{ color: 'red', marginTop: '2vh' }}>
          {Object.keys(errors).map((fieldName) => (
        //@ts-ignore
            <span key={fieldName} style={{ marginTop: '1vh' }}>{errors[fieldName]?.message} <br />
            </span>
          ))}
        </p>
      )}
    </Fragment>
  );
};
