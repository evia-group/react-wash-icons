import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M4,28h24V4H4V28z M7,7h18v18H7V7z"}],
    ['rect', {}],
    ['rect', {}],
    ['rect', {}],
  ]],
];

export const DryingDripDry = createWashIcon('DryingDripDry', iconNodes);
