import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M4,28h24V4H4V28z M22.627,7C20.729,8.262,18.451,9,16,9s-4.729-0.738-6.627-2H22.627z M7,7.701 C9.432,9.755,12.566,11,16,11s6.568-1.245,9-3.299V25H7V7.701z"}],
  ]],
];

export const DryingLineDry = createWashIcon('DryingLineDry', iconNodes);
