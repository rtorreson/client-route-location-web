import { Overlay, Spinner } from '@/shared/components';
import { Fragment } from 'react';

export const ComposableLoader = () => {
  return (
    <>
      <Fragment>
        <Overlay />
        <Spinner />
      </Fragment>
    </>
  );
};
