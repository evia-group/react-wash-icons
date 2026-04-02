import { forwardRef, createElement } from 'react';
import { Icon } from './Icon';
import type { IconNode, WashIconProps } from './types';

export function createWashIcon(displayName: string, nodes: IconNode[]) {
  const Component = forwardRef<SVGSVGElement, WashIconProps>((props, ref) =>
    createElement(Icon, { ref, nodes, ...props }),
  );
  Component.displayName = displayName;
  return Component;
}
