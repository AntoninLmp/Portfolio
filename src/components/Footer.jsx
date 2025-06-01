import "../index.css"

// eslint-disable-next-line react/prop-types
function Footer ({ backgroundColor = "#ffffff" }) {
    return (
        <footer className={`text-center ${backgroundColor}`}>
                <div className={'flex align-middle justify-evenly mx-72 py-10 '}>
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
                <p className={"p-5 text-base font-extralight"}>© 2023 - Antonin Lampin - Software developpeur</p>
        </footer>
    );
}

export default Footer;