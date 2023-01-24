import { CSS } from '../Theme/stitches.config';
import React from 'react';
export interface ButtonIconProps {
    children: React.ReactNode | undefined;
    className?: string;
    css?: CSS;
    size?: 'sm' | 'md' | 'lg';
    isSingle?: boolean;
    side?: 'left' | 'right';
}
declare const ButtonIcon: ({ children, className, css, size, isSingle, side, ...props }: ButtonIconProps) => JSX.Element;
export default ButtonIcon;
