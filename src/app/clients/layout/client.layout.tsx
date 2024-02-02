import { observer } from 'mobx-react-lite';

import { CreateContact, ListContact, ListContactRoutes } from '../fragments';
import contactStore from '../store/client.store';

import {
  useListContactQuery,
  useListContactRoutesQuery,
} from '../hooks/use.contact';

import { Contact } from '../types';
import { Card, Container } from '@/shared/components';
import { ComposableLoader } from '@/shared/composables';

export const ClientLayout = observer(() => {
  const { contacts, isLoading } = useListContactQuery();
  const { contacts: contactRoutes, isLoading: loading } =
    useListContactRoutesQuery();
  const allContacts: Contact[] = contactStore.contacts && [
    ...(contacts ?? ([] as any)),
    ...contactStore.contacts,
  ];

  if (isLoading) {
    return <ComposableLoader />;
  }

  return (
    <Container>
      <CreateContact /> &nbsp;
      <ListContactRoutes contacts={contactRoutes!} />
      <Card
        style={{ marginTop: '4vh' }}
        $width='100%'
        $height='auto'
        $borderRadious='8'
        $padding='24'
        $gap='16'
        $border='none'
      >
        <ListContact values={allContacts} />
      </Card>
    </Container>
  );
});
