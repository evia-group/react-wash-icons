import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M16,26c6.075,0,11-4.925,11-11S22.075,4,16,4S5,8.925,5,15S9.925,26,16,26z M16,6c4.971,0,9,4.029,9,9s-4.029,9-9,9 s-9-4.029-9-9S11.029,6,16,6z"}],
    ['path', {"d":"M13.763,17.941h4.406l1.008,2.852h2.039L17.052,9.59h-2.094l-4.195,11.203h2.031L13.763,17.941z M15.786,11.957 c0.058-0.172,0.109-0.406,0.156-0.703h0.031c0.052,0.322,0.102,0.557,0.148,0.703l1.555,4.469h-3.43L15.786,11.957z"}],
  ]],
];

export const DrycleaningA = createWashIcon('DrycleaningA', iconNodes);
