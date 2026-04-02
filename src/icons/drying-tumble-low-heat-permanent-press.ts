import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M28,4H4v24h24V4z M25,16v9h-9H7v-9V7h9h9V16z"}],
    ['path', {"d":"M16,7c-4.971,0-9,4.029-9,9s4.029,9,9,9s9-4.029,9-9S20.971,7,16,7z M16,24c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8 S20.418,24,16,24z"}],
    ['circle', {"cx":"16","cy":"16","r":"2"}],
    ['rect', {}],
  ]],
];

export const DryingTumbleLowHeatPermanentPress = createWashIcon('DryingTumbleLowHeatPermanentPress', iconNodes);
