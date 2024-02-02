import { observer } from 'mobx-react-lite';

import { ContactProvider } from './context/client.provider';
import { ClientView } from './view';

const Client = () => {
    return (
        <ContactProvider>
            <ClientView />
        </ContactProvider>
    )
}

export default observer(Client);
