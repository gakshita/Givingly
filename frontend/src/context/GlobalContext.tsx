import { createContext, useContext, useState } from "react";

type GlobalContextType = {
    showProjectModal: boolean;
    setShowProjectModal: (show: boolean) => void;
};
type GlobalContextProviderProps = {
    children: React.ReactElement;
};
const initialContextState: GlobalContextType = {
    showProjectModal: false,
    setShowProjectModal: () => {}
};
const GlobalContext = createContext<GlobalContextType>(initialContextState);

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const [showProjectModal, setShowProjectModal] = useState(false);

    return (
        <GlobalContext.Provider
            value={{ showProjectModal, setShowProjectModal }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useProjectModal = () => {
    const { showProjectModal: showModal, setShowProjectModal: setShowModal } =
        useContext(GlobalContext);

    return { showModal, setShowModal };
};

export default GlobalContextProvider;
