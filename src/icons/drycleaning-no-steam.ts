import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['rect', {"transform":"matrix(-0.7072 -0.7071 0.7071 -0.7072 39.8654 28.1264)"}],
    ['path', {"d":"M16,4C9.925,4,5,8.925,5,15s4.925,11,11,11s11-4.925,11-11S22.075,4,16,4z M16,24c-4.971,0-9-4.029-9-9s4.029-9,9-9 s9,4.029,9,9S20.971,24,16,24z"}],
  ]],
];

export const DrycleaningNoSteam = createWashIcon('DrycleaningNoSteam', iconNodes);
