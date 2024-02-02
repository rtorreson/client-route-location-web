import { Contact } from './contact.entitie';

export type ContactContextType = {
  contacts: Contact[];
  addContact: (contact: Contact) => Promise<Contact>;
  listContacts: () => Contact[];
  filteredContacts: Contact[];
};
