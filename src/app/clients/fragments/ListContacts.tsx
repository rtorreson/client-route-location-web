import { observer } from 'mobx-react-lite';
import { Fragment, useMemo, useState } from 'react';

import { ComposableTable } from '@/shared';

import { Contact } from '../types';

export const ListContact = observer(({ values }: { values: Contact[] | [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(values.length / 6);
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;

  const contacts = useMemo(() => {
    return values?.slice(startIndex, endIndex);
  }, [startIndex, endIndex]);

  const nextPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <Fragment>
      <ComposableTable
        currentPage={currentPage}
        nextPage={nextPage}
        contacts={contacts}
      />
    </Fragment>
  );
});
