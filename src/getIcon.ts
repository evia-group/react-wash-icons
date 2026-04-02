import type { ComponentType } from 'react';
import type { WashIconProps } from './types';
import { iconMap } from './iconMap';

export function getIcon(
  name: string,
): ComponentType<WashIconProps> | undefined {
  return iconMap[name];
}
