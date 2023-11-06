import Button from "@Components/Buttons";
import { Container } from "./style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CustomModal from "@Components/Modal";

const ProjectForm = () => {
    return (
        <div>
            <Button func={() => {}} text="Upload Project" width="100%"></Button>
        </div>
    );
};
export default function NewProject() {
    return (
        <CustomModal>
            <Container>
                <ArrowBackIosIcon onClick={() => {}} className="back-btn" />
                <h1>
                    Kick-off <br /> your project
                </h1>
                <ProjectForm />
            </Container>
        </CustomModal>
    );
}
