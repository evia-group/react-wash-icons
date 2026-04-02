import { forwardRef, createElement } from 'react';
import type { IconNode, WashIconProps } from './types';

function renderNodes(nodes: IconNode[]): React.ReactNode[] {
  return nodes.map(([tag, attrs, children], i) =>
    createElement(tag, { key: i, ...attrs }, children ? renderNodes(children) : undefined),
  );
}

export const Icon = forwardRef<SVGSVGElement, WashIconProps & { nodes: IconNode[] }>(
  ({ size = 24, color = 'currentColor', nodes, children, className, ...rest }, ref) => {
    return createElement(
      'svg',
      {
        ref,
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 32 32',
        fill: color,
        className,
        ...rest,
      },
      ...renderNodes(nodes),
      children,
    );
  },
);

Icon.displayName = 'Icon';
