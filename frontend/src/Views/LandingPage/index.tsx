import Button from "@Components/Buttons";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="left">
                <h1 className="heading">Givingly</h1>
                <h1 className="sub-head">
                    Supporting great <br /> causes made easy
                </h1>
                <div className="desc">
                    We helped over 3,500 projects and causes. Sign in today and
                    get your idea kicked off or support others kick off their
                    amazing projects.
                </div>
                <Button
                    text="Start Today"
                    func={() => {
                        navigate("home");
                    }}
                    width={"280px"}
                    className="align"
                />
            </div>
            <div className="right">
                <img src="/lp_img.png" />
            </div>
        </Container>
    );
};

export default LandingPage;
