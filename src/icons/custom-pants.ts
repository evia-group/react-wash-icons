import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['polygon', {"points":"10,26 15,26 16,14 17,26 22,26 22,8 16,8 10,8"}],
    ['rect', {}],
  ]],
];

export const CustomPants = createWashIcon('CustomPants', iconNodes);
