import { createWashIcon } from '../createWashIcon';
import type { IconNode } from '../types';

const iconNodes: IconNode[] = [
  ['g', {}, [
    ['path', {"d":"M31,9.333L30,7l-2,1.098V4H4v4.098L2,7L1,9.333l3,1.621V21.27l-3,1.646L2,25l2-1.08V28h24v-4.08L30,25l1-2.084l-3-1.646 V10.954L31,9.333z M7,7h18v2.744l-9,4.939L7,9.744V7z M7,12.574l6.472,3.497L7,19.623V12.574z M25,25H7v-2.701l9-4.862l9,4.862V25z M25,19.623l-6.472-3.552L25,12.574V19.623z"}],
  ]],
];

export const DryingNotAllowed = createWashIcon('DryingNotAllowed', iconNodes);
