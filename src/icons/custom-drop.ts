import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M9,21c0,2.209,1.791,4,4,4s4-1.791,4-4s-4-10-4-10S9,18.791,9,21z"}],
    ['path', {"d":"M15.583,14.628c1.183,2.289,2.329,4.84,2.403,6.227C18.312,20.939,18.647,21,19,21c2.209,0,4-1.791,4-4S19,7,19,7 S16.692,11.498,15.583,14.628z"}],
  ]],
];

export const CustomDrop = createWashIcon('CustomDrop', iconNodes);
