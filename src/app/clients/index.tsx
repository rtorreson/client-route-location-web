import { observer } from 'mobx-react-lite';

import { ContactProvider } from './context/client.provider';
import { ClientLayout } from './layout';

const Client = () => {
    return (
        <ContactProvider>
            <ClientLayout />
        </ContactProvider>
    )
}

export default observer(Client);
