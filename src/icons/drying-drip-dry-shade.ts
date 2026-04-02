import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M4,28h24V4H4V28z M7,7h4l-4,4V7z M7,13l3-3l3-3h2l-3,3h-2v2l-3,3V13z M7,17l3-3v8h2V12l5-5h8v18H7V17z"}],
    ['rect', {}],
    ['rect', {}],
  ]],
];

export const DryingDripDryShade = createWashIcon('DryingDripDryShade', iconNodes);
