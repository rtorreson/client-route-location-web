import { observer } from 'mobx-react-lite';
import { Fragment, useMemo, useState } from 'react';

import contactStore from '../store/client.store'

import { ComposableTable } from '@/shared';

import { Contact } from '../types';

export const ListContact = observer(({ values }: { values: Contact[] | [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(values.length / 5);
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;

  const visibleData = useMemo(() => {
    return values?.slice(startIndex, endIndex);
  }, [values, startIndex, endIndex]);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <Fragment>
      <ComposableTable
        currentPage={currentPage}
        nextPage={goToPage}
        visibleData={visibleData}
      />
    </Fragment>
  );
});
