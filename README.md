# Simple Flip Motion ⚡️

[![npm version](https://img.shields.io/npm/v/simple-flip-motion.svg?style=flat-square)](https://www.npmjs.com/package/simple-flip-motion)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/simple-flip-motion?style=flat-square)](https://bundlephobia.com/package/simple-flip-motion)
[![license](https://img.shields.io/npm/l/simple-flip-motion?style=flat-square)](https://github.com/your-username/simple-flip-motion/blob/main/LICENSE)
[![Boosty](https://img.shields.io/badge/Support-Boosty-orange?style=flat-square&logo=boosty)](https://boosty.to/antonvoronezh/donate)
[![Crypto](https://img.shields.io/badge/Donate-Crypto-2CA5E0?style=flat-square&logo=telegram&logoColor=white)](https://t.me/AntonVoronezhh/5)

> **Zero-config, lightweight drop-in animation utility.**
> Automatically animate DOM changes (additions, removals, reordering) without writing a single keyframe.

## Why? 🤔

You want your lists to feel smooth, but you don't want to:
- ❌ Install heavy animation libraries (like Framer Motion) for simple tasks.
- ❌ Write complex transition configs.
- ❌ Manually calculate positions.

**Simple Flip Motion** is the solution. It uses the **FLIP** technique and the native **Web Animations API** to smoothly transition elements when the DOM changes.

- **Universal:** Works with React, Vue, Svelte, Solid, Angular, and Vanilla JS.
- **Tiny:** < 2KB gzipped.
- **Performant:** Uses hardware-accelerated transforms.

---

## Installation 📦

```bash
npm install simple-flip-motion
# or
yarn add simple-flip-motion
# or
pnpm add simple-flip-motion
```

---

## Usage 🚀

### React

Use the `useAutoAnimate` hook.

```jsx
import { useState } from 'react'
import { useAutoAnimate } from 'simple-flip-motion/react'

const MyList = () => {
    const [items, setItems] = useState(['🍎 Apple', '🍌 Banana', '🍒 Cherry'])
    const [parent] = useAutoAnimate()

    const add = () => setItems([...items, '🍇 Grape'])

    return (
        <>
            <ul ref={parent}>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={add}>Add Fruit</button>
        </>
    )
}
```

### Vue 3

Use the `v-auto-animate` directive.

```html
<script setup>
import { ref } from 'vue'
import { vAutoAnimate } from 'simple-flip-motion/vue'

const items = ref([1, 2, 3])
</script>

<template>
  <ul v-auto-animate>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>
```

### Svelte

Use the `animate` action.

```svelte
<script>
  import { animate } from 'simple-flip-motion/svelte'
  let items = ['One', 'Two', 'Three'];
</script>

<!-- Pass options directly to the action -->
<ul use:animate={{ duration: 300 }}>
  {#each items as item (item)}
    <li>{item}</li>
  {/each}
</ul>
```

### SolidJS

Use the `autoAnimate` directive.

**Note for TypeScript users:** You need to extend the JSX namespace to avoid type errors with `use:`.

```tsx
import { createSignal, For } from 'solid-js';
import { autoAnimate } from 'simple-flip-motion/solid';

// ⚠️ TypeScript only: Add this declaration to fix "Property 'use:autoAnimate' does not exist"
declare module "solid-js" {
  namespace JSX {
    interface Directives {
      autoAnimate: boolean | object;
    }
  }
}

function App() {
  const [items, setItems] = createSignal([1, 2, 3]);

  return (
    <ul use:autoAnimate={{ duration: 500 }}>
      <For each={items()}>{(item) => <li>{item}</li>}</For>
    </ul>
  );
}
```

### Angular (14+)

Use the standalone `AutoAnimateDirective`.

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoAnimateDirective } from 'simple-flip-motion/angular';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, AutoAnimateDirective],
  template: `
    <ul autoAnimate>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `
})
export class ListComponent {
  items = ['Item 1', 'Item 2'];
}
```

### Vanilla JS

```js
import { autoAnimate } from 'simple-flip-motion'

const list = document.getElementById('my-list')

// Enable animations
const controller = autoAnimate(list)

// Later, if you want to stop animating:
// controller.disconnect()
```

---

## Configuration ⚙️

You can customize the duration and easing function.

```js
// React
useAutoAnimate({ duration: 500, easing: 'ease-out' })

// Vue
<ul v-auto-animate="{ duration: 500 }">

// Svelte
<ul use:animate={{ duration: 500 }}>
```

| Option | Type | Default | Description |
|---|---|---|---|
| `duration` | `number` | `250` | Animation duration in ms. |
| `easing` | `string` | `'ease-in-out'` | CSS easing function (e.g., 'linear', 'cubic-bezier(...)'). |

---

## How it works 🛠

1.  **MutationObserver** watches the parent element for changes in its children (add/remove).
2.  **FLIP Technique**:
    *   **F**irst: Calculates the position of all elements before the change.
    *   **L**ast: Calculates the position after the change.
    *   **I**nvert: Applies a transform to make elements look like they are still in the old position.
    *   **P**lay: Removes the transform and animates to the new position using Web Animations API.

## Support the project ❤️
> "We eliminated the manual keyframe spaghetti, saved your users from jarring layout jumps, and absorbed the `MutationObserver` & FLIP calculation nightmare. You saved dozens of hours not reinventing a transition engine that would have caused layout thrashing anyway. **Your donation** is a fair trade for butter-smooth lists and weekends free from debugging CSS transforms."

If this library saved you time, please consider supporting the development:

1.  **Fiat (Cards/PayPal):** via **[Boosty](https://boosty.to/antonvoronezh/donate)** (one-time or monthly).
2.  **Crypto (USDT/TON/BTC/ETH):** view wallet addresses on **[Telegram](https://t.me/AntonVoronezhh/5)**.

<div style="display: flex; gap: 10px;">
  <a href="https://boosty.to/antonvoronezh/donate">
    <img src="https://img.shields.io/badge/Support_on-Boosty-orange?style=for-the-badge&logo=boosty" alt="Support on Boosty">
  </a>
  <a href="https://t.me/AntonVoronezhh/5">
    <img src="https://img.shields.io/badge/Crypto_via-Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Crypto via Telegram">
  </a>
</div>


## License

MIT
```
