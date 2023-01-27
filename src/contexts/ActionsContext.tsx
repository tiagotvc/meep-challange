import {
  createContext,
  useRef,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";

type ActionsType = {
  toogleMenu: boolean;
};

function useStoreData(): {
  get: () => ActionsType;
  set: (value: Partial<ActionsType>) => void;
  subscribe: (callback: () => void) => () => void;
} {
  const store = useRef({
    toogleMenu: false,
  });

  const get = useCallback(() => store.current, []);

  const subscribers = useRef(new Set<() => void>());

  const set = useCallback((value: Partial<ActionsType>) => {
    store.current = { ...store.current, ...value };
    subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  return { get, set, subscribe };
}

type ActionStoreDataReturnType = ReturnType<typeof useStoreData>;

const ActionsContext = createContext<ActionStoreDataReturnType | null>(null);

export function useStore(): [
  ActionsType,
  (value: Partial<ActionsType>) => void
] {
  const store = useContext(ActionsContext);
  if (store) {
  }

  const [state, setState] = useState(store.get());

  useEffect(() => {
    return store.subscribe(() => setState(store.get()));
  });

  return [state, store.set];
}

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ActionsContext.Provider value={useStoreData()}>
      {children}
    </ActionsContext.Provider>
  );
}

export default ActionsContext;
