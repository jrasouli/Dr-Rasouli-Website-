import React from 'react';

type Loader = () => Promise<{ default: React.ComponentType }>;

const resolved = new Map<Loader, React.ComponentType>();
const pending = new Map<Loader, Promise<void>>();

/** Resolve a route module once and cache the component so renderToString does not suspend. */
export function loadPage(loader: Loader): Promise<void> {
  if (resolved.has(loader)) return Promise.resolve();
  let task = pending.get(loader);
  if (!task) {
    task = loader().then((mod) => {
      resolved.set(loader, mod.default);
    });
    pending.set(loader, task);
  }
  return task;
}

export function lazyPage(loader: Loader): React.ComponentType & { preload: () => Promise<void> } {
  const Page: React.FC = () => {
    const loaded = resolved.get(loader);
    if (!loaded) {
      throw loadPage(loader);
    }
    // Cached route component. createElement avoids treating the lookup as a new component.
    return React.createElement(loaded);
  };
  return Object.assign(Page, { preload: () => loadPage(loader) });
}
