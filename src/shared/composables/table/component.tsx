import { Fragment } from 'react';
import {
    Title,
    Div,
    StyledTable,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Typography,
    LeftArrow,
    RightArrow,
} from '@/shared/components';

import { Contact } from '@/app/clients/types';

export const ComposableTable = ({
    visibleData,
    nextPage,
    currentPage,
}: {
    currentPage: number;
    visibleData: Contact[];
    nextPage: (pageNumber: number) => void;
}) => {
    return (
        <Fragment>
            <Div $alignItens='center' $justify='space-between'>
                <Title $fontSize='24px' $fontWeight='400'>
                    Registros de Contatos
                </Title>
                <Div $alignItens='center' $gap='10px'>
                    <LeftArrow onClick={() => nextPage(currentPage - 1)} />
                    <Typography>Página {currentPage}</Typography>
                    <RightArrow onClick={() => nextPage(currentPage + 1)} />
                </Div>
            </Div>
            <br />
            <StyledTable>
                <Thead style={{ textAlign: 'center' }}>
                    <Tr $borderBottom='1px solid #696D6B' $margin='10px 0px'>
                        <Th typeof='id'>Id</Th>
                        <Th typeof='ranking'>Nome</Th>
                        <Th typeof='ranking'>E-mail</Th>
                        <Th typeof='ranking'>Celular</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {visibleData.map((contact, key) => {
                        return (
                            <Tr key={key}>
                                <Td>{contact.id}</Td>
                                <Td>{contact.name}</Td>
                                <Td>{contact.email}</Td>
                                <Td>{contact.cellphone}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </StyledTable>
        </Fragment>
    );
};
