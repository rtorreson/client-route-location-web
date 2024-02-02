import React, { ReactNode } from 'react';
import Modal from 'react-modal';

type TModal = {
  children: ReactNode;
  isOpen: boolean;
  onRequestClose: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
};

export const ComposableModal: React.FC<TModal> = ({
  children,
  isOpen,
  onRequestClose,
}): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      {children}
    </Modal>
  );
};
