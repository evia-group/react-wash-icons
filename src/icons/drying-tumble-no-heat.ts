import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M4,28h24V4H4V28z M7,16V7h9h9v9v9h-9H7V16z"}],
    ['circle', {"cx":"16","cy":"16","r":"9"}],
  ]],
];

export const DryingTumbleNoHeat = createWashIcon('DryingTumbleNoHeat', iconNodes);
