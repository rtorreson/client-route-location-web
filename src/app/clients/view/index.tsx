import { Fragment } from 'react';
import { observer } from 'mobx-react-lite';

import { CreateContact, ListContact } from '../fragments';
import contactStore from '../store/client.store'

import { useListContactQuery } from '../hooks/use.contact';

import { Contact } from '../types';


export const ClientView = observer(() => {
    const { contacts } = useListContactQuery();
    const allContacts: Contact[] = contactStore.contacts && [...contactStore.contacts, ...contacts ?? [] as any];

    return (
        <Fragment>
            <CreateContact />
            <ListContact values={allContacts} />
        </Fragment>
    )
})

