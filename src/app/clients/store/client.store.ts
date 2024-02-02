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
  public get filteredContacts(): Entitie.Contact[] {
    const filterLower = this.filter.toLowerCase();
    return this.contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterLower) ||
        contact.email.toLowerCase().includes(filterLower) ||
        contact.cellphone.toLowerCase().includes(filterLower)
    );
  }
}

export default new ContactStore();
