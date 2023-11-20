import "../index.css"

const Footer = () => {
    return (
        <footer className={"text-center"}>
                <p className={"m-8 font-light text-5xl"}>Travaillons <span className='c_green'>ensemble</span> !</p>
                <div className={'flex align-middle justify-evenly mb_4'}>
                    <a href='https://www.linkedin.com/in/antonin-lampin-346a2a1a4/'>
                        <img src='https://cdn-icons-png.flaticon.com/256/38/38669.png' alt='Linkedin Logo' className={'w-20 h-20'} />
                    </a>
                    <a href="mailto:lampinantonin@mail.com">
                        <img src='https://cdn-icons-png.flaticon.com/512/6244/6244710.png' alt='Email Logo' className={'w-20 h-20'} />
                    </a>
                    <a href='https://github.com/AntoninLmp'>
                        <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub Logo' className={'w-20 h-20'} />
                    </a>
                </div>
                <p id="copyright">© 2023 - Antonin Lampin - Software developper</p>
        </footer>
    );
};

export default Footer;