import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['rect', {"transform":"matrix(0.7071 -0.7072 0.7072 0.7071 -1.947 6.9144)"}],
    ['path', {"d":"M5,15c0,6.075,4.925,11,11,11s11-4.925,11-11S22.075,4,16,4S5,8.925,5,15z M16,6c4.971,0,9,4.029,9,9s-4.029,9-9,9 s-9-4.029-9-9S11.029,6,16,6z"}],
  ]],
];

export const DrycleaningReducedMoisture = createWashIcon('DrycleaningReducedMoisture', iconNodes);
