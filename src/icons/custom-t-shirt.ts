import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M19,7c0,0,0,2-3,2s-3-2-3-2L7,9l-3,5l4,3l2-3c0,0,0,1,0,3s0,8,0,8h6h6c0,0,0-6,0-8s0-3,0-3l2,3l4-3l-3-5L19,7z"}],
  ]],
];

export const CustomTShirt = createWashIcon('CustomTShirt', iconNodes);
