import { onCleanup } from 'solid-js';
import { autoAnimate } from './index';

export function autoAnimateDirective(el: HTMLElement, accessor: () => any) {
    const options = accessor ? accessor() : {};

    const cleanup = autoAnimate(el, options || {});

    onCleanup(() => {
        cleanup();
    });
}

// import { autoAnimate } from 'simple-flip-motion/solid'
export { autoAnimateDirective as autoAnimate };
