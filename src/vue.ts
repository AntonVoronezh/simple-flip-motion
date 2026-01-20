import type { ObjectDirective } from 'vue';
import { autoAnimate } from './index';

const cleanups = new WeakMap<HTMLElement, () => void>();

export const vAutoAnimate: ObjectDirective = {
    mounted: (el, binding) => {
        const cleanup = autoAnimate(el, binding.value || {});
        cleanups.set(el, cleanup);
    },
    updated: (el, binding) => {
    },
    unmounted: (el) => {
        const cleanup = cleanups.get(el);
        if (cleanup) cleanup();
    }
};
