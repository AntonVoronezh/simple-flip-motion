interface AnimationOptions {
    duration?: number;
    easing?: string;
}

export function autoAnimate(
    parent: HTMLElement,
    options: AnimationOptions = {}
) {
    const { duration = 250, easing = 'ease-in-out' } = options;

    const positions = new Map<Element, DOMRect>();

    const recordPositions = () => {
        for (const child of Array.from(parent.children)) {
            positions.set(child, child.getBoundingClientRect());
        }
    };

    const applyAnimation = () => {
        const newChildren = Array.from(parent.children);

        newChildren.forEach((child) => {
            const first = positions.get(child);
            const last = child.getBoundingClientRect();

            if (!first) {
                child.animate(
                    [{ opacity: 0, transform: 'scale(0.95)' }, { opacity: 1, transform: 'scale(1)' }],
                    { duration, easing }
                );
                return;
            }

            const deltaX = first.left - last.left;
            const deltaY = first.top - last.top;

            if (deltaX === 0 && deltaY === 0) return;

            child.animate(
                [
                    { transform: `translate(${deltaX}px, ${deltaY}px)` },
                    { transform: 'translate(0, 0)' }
                ],
                { duration, easing }
            );
        });

        positions.clear();
        recordPositions();
    };

    recordPositions();

    const observer = new MutationObserver((mutations) => {
        const isChildListChange = mutations.some(m => m.type === 'childList');
        if (isChildListChange) {
            applyAnimation();
        }
    });

    observer.observe(parent, { childList: true });

    return () => observer.disconnect();
}
