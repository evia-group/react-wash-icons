import type { SVGAttributes } from 'react';

export interface WashIconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export type IconNode = [
  elementName: string,
  attributes: Record<string, string>,
  children?: IconNode[],
];
