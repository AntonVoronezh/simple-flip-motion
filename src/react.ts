import { useEffect, useRef, useState } from 'react';
import { autoAnimate } from './index';

export function useAutoAnimate<T extends HTMLElement = any>(
    options?: Parameters<typeof autoAnimate>[1]
) {
    const elementRef = useRef<T>(null);
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        if (elementRef.current && enabled) {
            const controller = autoAnimate(elementRef.current, options);
            return controller;
        }
    }, [enabled]);

    return [elementRef, setEnabled] as const;
}
