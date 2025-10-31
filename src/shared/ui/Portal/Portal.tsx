import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  // То что мы телепортируем
  children: ReactNode;
  // Куда телепортируем
  element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    element = document.body,
  } = props;

  return createPortal(children, element);
};
