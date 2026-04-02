import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M4,25l3.779-2.709C9.795,24.562,12.726,26,16,26c3.263,0,6.186-1.429,8.2-3.686L28,25l1-2.084l-3.449-2.472 C26.468,18.838,27,16.982,27,15s-0.532-3.838-1.449-5.444L29,7.084L28,5l-3.8,2.686C22.186,5.429,19.263,4,16,4 c-3.274,0-6.205,1.438-8.221,3.709L4,5L3,7.332l3.358,2.374C5.494,11.276,5,13.08,5,15s0.494,3.724,1.358,5.294L3,22.668L4,25z"}],
  ]],
];

export const DrycleaningWetcleanNotAllowed = createWashIcon('DrycleaningWetcleanNotAllowed', iconNodes);
