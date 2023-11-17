import "../Global/index.css"

import Header from "../Global/Header";
import Navbar from "../Global/Navbar.jsx";
import Footer from "../Global/Footer.jsx";

const Studies = () => {
    return (
        <>
            <Header></Header>
            <div className="d_flex">
                <Navbar></Navbar>
                <section>
                    <article>
                        Studies
                    </article>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Studies;