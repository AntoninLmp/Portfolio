import "../index.css"

const Footer = () => {
    return (
        <footer className="text_center">
                <p id="footer_text">Travaillons <span className='c_green'>ensemble</span> !</p>
                <div className='d_flex align_center justify_e mb_4'>
                    <a href='https://www.linkedin.com/in/antonin-lampin-346a2a1a4/'>
                        <img src='https://ytpr.co.ke/wp-content/uploads/2020/06/linkedin-icon-png-transparent-background-8.png' alt='Linkedin Logo' className='img_logo_footer' />
                    </a>
                    <a href="mailto:lampinantonin@mail.com">
                        <img src='https://freesvg.org/img/Mail-Icon-White-on-Grey.png' alt='Email Logo' className='img_logo_footer' />
                    </a>
                    <a href='https://github.com/AntoninLmp'>
                        <img src='https://camo.githubusercontent.com/fe3b97974431a5652f0572ef8dd3c46d206d0aeb9658c7dd1f9c766ed89e4215/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067' alt='GitHub Logo' className='img_logo_footer' />
                    </a>
                </div>
                <p id="copyright">© 2023 - Antonin Lampin - Software developper</p>
        </footer>
    );
};

export default Footer;