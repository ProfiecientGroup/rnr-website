import type { FC, MouseEvent, ReactElement } from 'react';
import { cloneElement, useContext } from 'react';
import PropTypes from 'prop-types';

import { DropdownContext } from './dropdown-context';

interface DropdownButtonProps {
  children: ReactElement<{
    onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLElement>) => void;
  }>;
}

export const DropdownTrigger: FC<DropdownButtonProps> = (props) => {
  const { children } = props;
  const { onTriggerEnter, onTriggerLeave } = useContext(DropdownContext);

  return cloneElement(children, {
    onMouseEnter: (event: MouseEvent<HTMLElement>) => {
      children.props.onMouseEnter?.(event); // Call the child's `onMouseEnter`, if provided
      onTriggerEnter(event); // Call `onTriggerEnter` from context
    },
    onMouseLeave: (event: MouseEvent<HTMLElement>) => {
      children.props.onMouseLeave?.(event); // Call the child's `onMouseLeave`, if provided
      onTriggerLeave(event); // Call `onTriggerLeave` from context
    },
  });
};

DropdownTrigger.propTypes = {
  children: PropTypes.element.isRequired,
};
