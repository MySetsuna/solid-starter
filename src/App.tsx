import { Component, createSignal, onMount } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';
import clickOutside from './use/outsideClick';

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  let img: HTMLImageElement | undefined;
  onMount(() => {
    clickOutside(img, () =>
      setCount((c) => c + 1)
    );
  });
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img ref={img} src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid {count()}
        </a>
      </header>
    </div>
  );
};

export default App;
