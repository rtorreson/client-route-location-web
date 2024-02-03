import { useState, FormEvent, Fragment } from 'react';
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
  Filter,
  Input,
  Card,
} from '@/shared/components';

import { Contact } from '@/app/clients/types';
import { useContactStore } from '@/app/clients/context/client.context';

export const ComposableTable = ({
  contacts,
  nextPage,
  currentPage,
}: {
  currentPage: number;
  contacts: Contact[];
  nextPage: (pageNumber: number) => any;
}) => {
  const contactStore = useContactStore();
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);

  const handleFilterChangeData = (event: FormEvent<HTMLInputElement>) => {
    contactStore.filter = event.currentTarget.value;
  };

  const handleFilterClick = () => {
    setIsFilterActive(!isFilterActive);
  };

  const showNextPageButton = contacts.length >= 6;

  return (
    <Fragment>
      <Card
        style={{ marginTop: '4vh' }}
        $width='100%'
        $height='auto'
        $borderRadious='8'
        $padding='24'
        $gap='16'
        $backgroundColor={'rgba(0,0,0,0.04)'}
        $border='none'
      >
        <Div $alignItens='center' $justify='space-between'>
          <Title $fontSize='24px' $fontWeight='400'>
            Registros de Contatos
          </Title>
          <Div $alignItens='center' $gap='10px'>
            <Filter onClick={handleFilterClick} />
            {isFilterActive && (
              <Input
                $height='25px'
                type='text'
                placeholder='Filtre qualquer dado'
                onChange={handleFilterChangeData}
              />
            )}
            <LeftArrow onClick={() => nextPage(currentPage - 1)} />
            <Typography>Página {currentPage}</Typography>
            {showNextPageButton && (
              <RightArrow onClick={() => nextPage(currentPage + 1)} />
            )}
          </Div>
        </Div>
        <br />
        <StyledTable>
          <Thead style={{ textAlign: 'center' }}>
            <Tr $borderBottom='1px solid #696D6B' $margin='10px 0px'>
              <Th>Id</Th>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>Celular</Th>
              <Th>Coordenadas</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contactStore.filteredContacts(contacts).map((contact, key) => {
              return (
                <Tr key={key}>
                  <Td>{contact.id}</Td>
                  <Td>{contact.name}</Td>
                  <Td>{contact.email}</Td>
                  <Td>{contact.cellphone}</Td>
                  <Td>
                    {contact.coordinate_x !== undefined &&
                      contact.coordinate_y !== undefined && (
                        <Fragment>
                          <strong>Coordinate X: </strong>
                          {contact.coordinate_x}
                          <strong>, </strong>
                          <strong>Coordinate Y: </strong>
                          {contact.coordinate_y}
                        </Fragment>
                      )}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </StyledTable>
      </Card>
    </Fragment>
  );
};
