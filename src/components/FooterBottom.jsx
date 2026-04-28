function FooterBottom() {
    const socials = [
        {
            id: 1,
            image: '/img/footer-facebook.png',
            alt: 'Facebook',
        },
        {
            id: 2,
            image: '/img/footer-twitter.png',
            alt: 'Twitter',
        },
        {
            id: 3,
            image: '/img/footer-youtube.png',
            alt: 'YouTube',
        },
        {
            id: 4,
            image: '/img/footer-pinterest.png',
            alt: 'Pinterest',
        },
        {
            id: 5,
            image: '/img/footer-periscope.png',
            alt: 'Periscope',
        },
    ]

    return (
        <section className="footer-bottom">
            <div className="container footer-bottom-container">
                <button>SIGN-UP NOW!</button>

                <div className="socials">
                    <h3>FOLLOW US</h3>

                    {socials.map((social) => (
                        <a href="#" key={social.id}>
                            <img src={social.image} alt={social.alt} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FooterBottom