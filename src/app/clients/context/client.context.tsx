import { useContext } from "react";
import { ContactContext } from "./client.provider";

export const useContactStore = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContactStore must be used within a ContactProvider');
    }
    return context;
};