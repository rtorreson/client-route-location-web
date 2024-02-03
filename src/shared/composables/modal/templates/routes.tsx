import { Fragment } from 'react';

import { Contact } from '@/app/clients/types';

import { StyledRouteModal } from '@/shared/components';

export const RouteModal = ({
  contacts,
}: {
  contacts: Contact[];
}): JSX.Element => {
  return (
    <Fragment>
      <StyledRouteModal>
        <div>
          <h2>Clientes Ordenados:</h2>
          <ul>
          {contacts.map((contact) => (
              <li key={contact.id}>
                <strong>ID:</strong> {contact.id}, &nbsp;
                <strong>Nome:</strong> {contact.name}, &nbsp;
                <strong>Email:</strong> {contact.email}, &nbsp;
                <strong>Coordenada X:</strong> {contact.coordinates.x}, &nbsp;
                <strong>Coordenada Y:</strong> {contact.coordinates.y}, &nbsp;
                <strong>Distância:</strong> {contact.distance}
              </li>
            ))}
          </ul>
        </div>
      </StyledRouteModal>
    </Fragment>
  );
};
