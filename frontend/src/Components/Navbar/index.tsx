import { Container } from "./style";
import Button from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useProjectModal } from "src/context/GlobalContext";
const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setShowModal } = useProjectModal();

    const handleScroll = () => {
        let scrollTop = window.scrollY;

        if (scrollTop > 60) {
            document.querySelector(".navbar")?.classList.add("scrolled");
        } else {
            document.querySelector(".navbar")?.classList.remove("scrolled");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <Container>
            <div id="navbar" className="navbar">
                <h1
                    className="heading"
                    onClick={() => {
                        navigate("");
                    }}
                >
                    Givingly
                </h1>
                <div className="right">
                    <div
                        className="tab hover-underline-animation"
                        onClick={() => {
                            navigate("home");
                        }}
                    >
                        Home
                    </div>
                    <div
                        className="tab hover-underline-animation"
                        onClick={() => {
                            navigate("projects");
                        }}
                    >
                        Projects
                    </div>
                    <Button
                        text={
                            location.pathname == "/"
                                ? "Start Today"
                                : "New Project"
                        }
                        className="not-m"
                        func={() =>
                            location.pathname == "/"
                                ? navigate("home")
                                : setShowModal(true)
                        }
                    ></Button>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
