import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M29,26l-4-15c0,0,0-2-3-2S6,9,6,9l1,2c0,0,12,1,14,1s2,2,2,2l0.333,2c-2.857,0-7.499,0-11.333,0c-8,0-9,10-9,10h22H29z M5.451,24C6.166,21.566,7.91,18,12,18h11.667l1,6H5.451z"}],
    ['circle', {"cx":"16","cy":"21","r":"2"}],
  ]],
];

export const IronLow = createWashIcon('IronLow', iconNodes);
