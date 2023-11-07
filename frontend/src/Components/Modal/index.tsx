import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "16px",
    p: 4
};
type ChildrenType = {
    children: React.ReactElement;
    showModal: boolean;
    setShowModal: (show: boolean) => void;
};
const CustomModal = ({ showModal, setShowModal, children }: ChildrenType) => {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={showModal}
                onClose={() => setShowModal(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500
                    }
                }}
            >
                <Fade in={showModal}>
                    <Box sx={style}>{children}</Box>
                </Fade>
            </Modal>
        </div>
    );
};
export default CustomModal;
