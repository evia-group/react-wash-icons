import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M26,12H8c0,0,0,3,3,3s8-1,10-1s2,2,2,2l-1,2h-5v-1h-4v1h-1c-6,0-8,7-8,7v1h24v-1c0,0,0-2-2-6C26,17,26,12,26,12z M19.5,20 h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5S19.776,20,19.5,20z M22.5,20h-1 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5S22.776,20,22.5,20z"}],
  ]],
];

export const CustomIron = createWashIcon('CustomIron', iconNodes);
