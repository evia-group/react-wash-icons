import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M16,26c6.075,0,11-4.925,11-11S22.075,4,16,4S5,8.925,5,15S9.925,26,16,26z M16,6c4.971,0,9,4.029,9,9s-4.029,9-9,9 s-9-4.029-9-9S11.029,6,16,6z"}],
  ]],
];

export const Drycleaning = createWashIcon('Drycleaning', iconNodes);
