import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M10,19c0,8,0,8,0,8s0,1,1,1s9,0,9,0s1,0,1-1s0,0,0-8s-4-9-4-9h-3C14,10,10,11,10,19z M16.793,11.238 c0.79-0.247,1.832,0.833,2.328,2.415c0.495,1.581,0.256,3.063-0.535,3.312c-0.79,0.247-1.832-0.833-2.328-2.415 C15.763,12.969,16.002,11.486,16.793,11.238z"}],
    ['path', {"d":"M17,6c0,0,0-1-1-1s-1,0-1,0s-1,0-1,1s0,3,0,3h3V6z"}],
  ]],
];

export const CustomDetergent = createWashIcon('CustomDetergent', iconNodes);
