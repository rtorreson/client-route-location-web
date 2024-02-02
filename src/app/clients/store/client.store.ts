import { makeAutoObservable, observable, action, computed } from 'mobx';
import * as Entitie from '../types';

class ContactStore {
  @observable
  contacts: Entitie.Contact[] = [];

  @observable
  filter: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public addContact(contact: Entitie.Contact): Promise<Entitie.Contact> {
    this.contacts.push(contact);
    return Promise.resolve(contact);
  }

  @action
  public listContacts(): Entitie.Contact[] {
    return this.contacts;
  }

  @computed
  public filteredContacts(contacts: Entitie.Contact []): Entitie.Contact[] {
    return contacts.filter((contact) => {
      const name = contact.name ? contact.name.toLowerCase() : '';
      const email = contact.email ? contact.email.toLowerCase() : '';
      const cellphone = contact.cellphone ? contact.cellphone.toLowerCase() : '';
  
      return (
        !this.filter ||
        name.includes(this.filter.toLowerCase()) ||
        email.includes(this.filter.toLowerCase()) ||
        cellphone.includes(this.filter.toLowerCase())
      );
    });
  }
}

export default new ContactStore();
