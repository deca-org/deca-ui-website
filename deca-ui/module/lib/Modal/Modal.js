import { ThemeContext } from '../Theme';
import Box from '../Box';
import Button from '../Button';
import { mergeRefs, useClickOutside, __DEV__, } from '../Utils';
import { animated, useTransition } from '@react-spring/web';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { StyledModal, StyledModalFlexbox, StyledModalOverlay, } from './Modal.styles';
export const ModalContext = React.createContext(null);
const CloseButton = () => (React.createElement("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("g", { "data-name": "Layer 2" },
        React.createElement("path", { d: "M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z", "data-name": "close" }))));
const Modal = React.forwardRef(({ children, open, setOpen, css, className = '', closeButton = false, autoGap = true, noPadding = false, as, ...props }, ref) => {
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            setOpen && setOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
    const transition = useTransition(open, {
        from: {
            scale: 0.75,
            opacity: 0,
        },
        enter: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            scale: 1,
            opacity: 1,
        },
        leave: {
            scale: 0.75,
            opacity: 0,
        },
        config: {
            tension: 220,
            friction: 18,
        },
    });
    const overlayTransition = useTransition(open, {
        from: {
            opacity: 0,
        },
        enter: {
            scale: 1,
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
        config: {
            duration: 120,
        },
    });
    const clickOutsideRef = useClickOutside(() => {
        setOpen && setOpen(false);
    });
    const preClass = 'decaModal';
    const { dark } = React.useContext(ThemeContext);
    const [DOM, setDOM] = useState(false);
    useEffect(() => {
        setDOM(true);
    }, []);
    if (DOM) {
        return ReactDOM.createPortal(transition((style, item) => item && (React.createElement(ModalContext.Provider, { value: { setOpen, autoGap } },
            overlayTransition((overlayStyle, overlayItem) => overlayItem && React.createElement(StyledModalOverlay, { style: overlayStyle })),
            React.createElement(StyledModal, { ref: mergeRefs(ref, clickOutsideRef), style: style, className: clsx(className, `${preClass}-root`), css: css, noPadding: noPadding, as: animated[as], isDark: dark, ...props },
                closeButton && (React.createElement(Box, { css: {
                        display: 'flex',
                        justifyContent: 'flex-end',
                    } },
                    React.createElement(Button, { variant: "ghost", pill: true, icon: React.createElement(CloseButton, null), css: {
                            mr: noPadding ? '-$0' : '-$3',
                            mt: noPadding ? '-$0' : '-$3',
                            p: '$n',
                            bg: 'transparent',
                            color: dark ? '$gray700' : '$gray500',
                            '&:hover': {
                                color: '$gray600',
                                bg: 'transparent',
                                borderColor: '$transparent',
                            },
                            '&:focus': {
                                color: dark ? '$gray500' : '$gray700',
                                bg: 'transparent',
                            },
                        }, onClick: () => setOpen && setOpen(false) }))),
                React.createElement(StyledModalFlexbox, { className: `${preClass}-flexbox`, autoGap: autoGap }, children))))), document.getElementById('decaUI-provider')
            ? document.getElementById('decaUI-provider')
            : document.querySelector('body'));
    }
    return React.createElement(React.Fragment, null);
});
if (__DEV__) {
    Modal.displayName = 'DecaUI.Modal';
}
export default Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL01vZGFsL01vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sR0FBRyxNQUFNLFVBQVUsQ0FBQztBQUMzQixPQUFPLE1BQU0sTUFBTSxhQUFhLENBQUM7QUFFakMsT0FBTyxFQUNMLFNBQVMsRUFHVCxlQUFlLEVBQ2YsT0FBTyxHQUVSLE1BQU0sWUFBWSxDQUFDO0FBQ3BCLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQ3hCLE9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBNEIsTUFBTSxPQUFPLENBQUM7QUFDN0UsT0FBTyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBRWpDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGdCQUFnQixDQUFDO0FBb0R4QixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBdUIsSUFBSSxDQUFDLENBQUM7QUFFNUUsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FDeEIsNkJBQ0UsT0FBTyxFQUFDLFdBQVcsaUJBQ1AsTUFBTSxFQUNsQixTQUFTLEVBQUMsT0FBTyxFQUNqQixJQUFJLEVBQUMsY0FBYyxFQUNuQixLQUFLLEVBQUMsNEJBQTRCO0lBRWxDLHdDQUFhLFNBQVM7UUFDcEIsOEJBQ0UsQ0FBQyxFQUFDLDhLQUE4SyxlQUN0SyxPQUFPLEdBQ1gsQ0FDTixDQUNBLENBQ1AsQ0FBQztBQVNGLE1BQU0sS0FBSyxHQUFtQixLQUFLLENBQUMsVUFBVSxDQUM1QyxDQUNFLEVBQ0UsUUFBUSxFQUNSLElBQUksRUFDSixPQUFPLEVBQ1As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