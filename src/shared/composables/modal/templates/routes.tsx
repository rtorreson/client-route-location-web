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
                {`ID: ${contact.id}, Nome: ${contact.name}, Email: ${contact.email}, Coordenada X: ${contact.coordinates.x}, Coordenada Y: ${contact.coordinates.y}, distancia: ${contact.distance}`}
              </li>
            ))}
          </ul>
        </div>
      </StyledRouteModal>
    </Fragment>
  );
};
