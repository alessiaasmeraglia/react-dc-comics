function FooterBottom() {
    const socials = [
        {
            image: '/img/footer-facebook.png',
            alt: 'Facebook',
        },
        {
            image: '/img/footer-twitter.png',
            alt: 'Twitter',
        },
        {
            image: '/img/footer-youtube.png',
            alt: 'YouTube',
        },
        {
            image: '/img/footer-pinterest.png',
            alt: 'Pinterest',
        },
        {
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
                        <img key={social.alt} src={social.image} alt={social.alt} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FooterBottom