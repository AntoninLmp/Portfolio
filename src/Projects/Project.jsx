import "../Global/index.css"

import Navbar from "../Global/Navbar.jsx";
import Header from "../Global/Header";
import Footer from "../Global/Footer.jsx";

const Project = () => {
    return (
        <>
            <Header></Header>
            <div className="d_flex">
                <Navbar></Navbar>
                <section>
                    <article>
                        Bonjour
                    </article>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Project;