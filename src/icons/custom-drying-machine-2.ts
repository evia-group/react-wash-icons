import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M26,10H6v18h20V10z M23,25H9V13h14V25z"}],
    ['path', {"d":"M22,14H10v10h12V14z M12,21h-1v-4h1V21z"}],
    ['path', {"d":"M26,4H6v5h20V4z M8,7.5C8,7.776,7.776,8,7.5,8S7,7.776,7,7.5v-2C7,5.224,7.224,5,7.5,5S8,5.224,8,5.5V7.5z M19.5,8 C18.671,8,18,7.329,18,6.5S18.671,5,19.5,5S21,5.671,21,6.5S20.329,8,19.5,8z M23.5,8C22.671,8,22,7.329,22,6.5S22.671,5,23.5,5 S25,5.671,25,6.5S24.329,8,23.5,8z"}],
  ]],
];

export const CustomDryingMachine2 = createWashIcon('CustomDryingMachine2', iconNodes);
