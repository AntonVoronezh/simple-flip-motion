import { autoAnimate } from './index';

export function animate(node: HTMLElement, options: any = {}) {
    let cleanup = autoAnimate(node, options);

    return {
        update(newOptions: any) {
            cleanup();
            cleanup = autoAnimate(node, newOptions);
        },
        destroy() {
            cleanup();
        }
    };
}
