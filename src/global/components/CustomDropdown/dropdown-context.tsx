import type { MouseEvent } from 'react';
import { createContext } from 'react';

// Define noop without any arguments or with a more specific type
const noop = (): void => {};

interface ContextValue {
  anchorEl: HTMLElement | null;
  onMenuEnter: (event: MouseEvent<HTMLElement>) => void;
  onMenuLeave: (event: MouseEvent<HTMLElement>) => void;
  onTriggerEnter: (event: MouseEvent<HTMLElement>) => void;
  onTriggerLeave: (event: MouseEvent<HTMLElement>) => void;
  open: boolean;
}

export const DropdownContext = createContext<ContextValue>({
  anchorEl: null,
  onMenuEnter: noop,
  onMenuLeave: noop,
  onTriggerEnter: noop,
  onTriggerLeave: noop,
  open: false,
});
