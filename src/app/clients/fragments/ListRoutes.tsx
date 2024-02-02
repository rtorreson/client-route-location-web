import { observer } from 'mobx-react-lite';
import { Fragment, useState } from 'react';

import { RouteModal } from '@/shared/composables/modal/templates/routes';
import { Button, Route } from '@/shared/components';
import { ComposableModal } from '@/shared/composables';

import { Contact } from '../types';

export const ListContactRoutes = observer(
  ({ contacts }: { contacts: Contact[] }) => {
    const [toogleModal, setToogleModal] = useState<boolean>(false);

    const switchToogleModal = () => {
      setToogleModal(!toogleModal);
    };
    return (
      <Fragment>
        <Button onClick={switchToogleModal} $height='50px'>
          <Route /> Verificar Rotas
        </Button>
        <ComposableModal
          children={<RouteModal contacts={contacts} />}
          isOpen={toogleModal}
          onRequestClose={switchToogleModal}
        />
      </Fragment>
    );
  }
);
