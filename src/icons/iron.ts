import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M3,26h22h4l-4-15c0,0,0-2-3-2S6,9,6,9l1,2c0,0,12,1,14,1s2,2,2,2l0.333,2c-2.857,0-7.499,0-11.333,0C4,16,3,26,3,26z M23.667,18l1,6H5.451C6.166,21.566,7.91,18,12,18H23.667z"}],
  ]],
];

export const Iron = createWashIcon('Iron', iconNodes);
