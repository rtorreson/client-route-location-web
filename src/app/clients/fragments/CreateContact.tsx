import { Button, Plus } from '@/shared/components';
import { ComposableModal } from '@/shared/composables';
import { observer } from 'mobx-react-lite';
import { Fragment, useState } from 'react';

import { useAddContactForm, useAddContactQuery } from '../hooks';
import { FormModal } from '@/shared/composables/modal/templates/form';

export const CreateContact = observer(() => {
  const [toogleModal, setToogleModal] = useState<boolean>(false);

  const { addContact } = useAddContactQuery();
  const { errors, handleSubmit, register, handleInputChange } =
    useAddContactForm(addContact);

  const switchToogleModal = () => {
    setToogleModal(!toogleModal);
  };

  return (
    <Fragment>
      <Button onClick={switchToogleModal} $height='50px'>
        <Plus /> Adicionar Contato
      </Button>
      <ComposableModal
        children={
          <FormModal
            errors={errors}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            register={{ ...register }}
            switchToogleModal={switchToogleModal}
          />
        }
        isOpen={toogleModal}
        onRequestClose={switchToogleModal}
      />
    </Fragment>
  );
});
