import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M24,9V4H8v5H24z M21.5,5C22.329,5,23,5.671,23,6.5S22.329,8,21.5,8S20,7.329,20,6.5S20.671,5,21.5,5z M17.5,5 C18.329,5,19,5.671,19,6.5S18.329,8,17.5,8S16,7.329,16,6.5S16.671,5,17.5,5z M9,5.5C9,5.224,9.224,5,9.5,5S10,5.224,10,5.5v2 C10,7.776,9.776,8,9.5,8S9,7.776,9,7.5V5.5z"}],
    ['path', {"d":"M10.721,12l-1.333,4h13.225l-1.333-4H10.721z M18,15h-4v-1h4V15z"}],
    ['path', {"d":"M27,18l-3-8H8l-3,8v10h22V18z M8,17l2-6h12l2,6H8z"}],
  ]],
];

export const CustomWashingMachine2 = createWashIcon('CustomWashingMachine2', iconNodes);
