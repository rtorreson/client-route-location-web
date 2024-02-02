import { RouterProvider } from 'react-router-dom';
import { ComposableLoader, Router } from '@/shared';

export const ContainerRoot = () => {
  return (
    <RouterProvider router={Router} fallbackElement={<ComposableLoader />} />
  );
};
