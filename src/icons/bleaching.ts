import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M16,4L3,26h26L16,4z M16,9l8,14H8L16,9z"}],
  ]],
];

export const Bleaching = createWashIcon('Bleaching', iconNodes);
