import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M28,4H4v24h24V4z M25,25H7V7h18V25z"}],
  ]],
];

export const Drying = createWashIcon('Drying', iconNodes);
