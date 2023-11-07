import { createContext, useContext, useState } from "react";

type GlobalContextType = {
    showProjectModal: boolean;
    showDonationModal: boolean;
    setShowProjectModal: (show: boolean) => void;
    setShowDonationModal: (show: boolean) => void;
};
type GlobalContextProviderProps = {
    children: React.ReactElement;
};
const initialContextState: GlobalContextType = {
    showProjectModal: false,
    showDonationModal: false,
    setShowProjectModal: () => {},
    setShowDonationModal: () => {}
};
const GlobalContext = createContext<GlobalContextType>(initialContextState);

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const [showProjectModal, setShowProjectModal] = useState(false);
    const [showDonationModal, setShowDonationModal] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                showProjectModal,
                setShowProjectModal,
                showDonationModal,
                setShowDonationModal
            }}
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

export const useDonationModal = () => {
    const { showDonationModal: showModal, setShowDonationModal: setShowModal } =
        useContext(GlobalContext);

    return { showModal, setShowModal };
};
export default GlobalContextProvider;
