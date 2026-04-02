import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M4,28h24V4H4V28z M7,7h4l-4,4V7z M7,13l6-6h2l-8,8V13z M7,17L17.04,7H25v18H7V17z"}],
  ]],
];

export const DryingDryShade = createWashIcon('DryingDryShade', iconNodes);
