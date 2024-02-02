import { createContext } from "react";
import { ClientProviderProps, ContactContextType } from "../types";
import store from '../store/client.store'

export const ContactContext = createContext<ContactContextType | null>(null);

export const ContactProvider = ({ children }: ClientProviderProps) => {

    return (
        <ContactContext.Provider value={store}>
            {children}
        </ContactContext.Provider>
    );
}
