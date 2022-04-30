import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

export interface GlobalStateInterface {
  score: number;
  totalQuestions?: number;
}

const initialState: GlobalStateInterface = {
  score: 0,
  totalQuestions: 0,
};

const GlobalStateContext = createContext({
  state: initialState,
  setState: {} as Dispatch<SetStateAction<GlobalStateInterface>>,
});

const GlobalStateProvider = ({
  children,
  value = initialState,
}: {
  children: React.ReactNode;
  value?: GlobalStateInterface;
}) => {
  const [state, setState] = useState(value);
  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
