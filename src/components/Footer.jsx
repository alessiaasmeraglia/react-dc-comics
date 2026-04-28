function Footer() {
    const footerLinks = [
        {
            id: 1,
            title: 'DC COMICS',
            links: [
                'Characters',
                'Comics',
                'Movies',
                'TV',
                'Games',
                'Videos',
                'News',
            ],
        },
        {
            id: 2,
            title: 'SHOP',
            links: [
                'Shop DC',
                'Shop DC Collectibles',
            ],
        },
        {
            id: 3,
            title: 'DC',
            links: [
                'Terms Of Use',
                'Privacy policy (New)',
                'Ad Choices',
                'Advertising',
                'Jobs',
                'Subscriptions',
                'Talent Workshops',
                'CPSC Certificates',
                'Ratings',
                'Shop Help',
                'Contact Us',
            ],
        },
        {
            id: 4,
            title: 'SITES',
            links: [
                'DC',
                'MAD Magazine',
                'DC Kids',
                'DC Universe',
                'DC Power Visa',
            ],
        },
    ]

    return (
        <footer className="footer-top">
            <div className="container footer-container">
                <div className="footer-links">
                    <div>
                        {footerLinks.slice(0, 2).map((section) => (
                            <div className="footer-list" key={section.id}>
                                <h3>{section.title}</h3>

                                <ul>
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a href="#">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {footerLinks.slice(2).map((section) => (
                        <div className="footer-list" key={section.id}>
                            <h3>{section.title}</h3>

                            <ul>
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <img className="big-logo" src="/img/dc-logo-bg.png" alt="DC big logo" />
            </div>
        </footer>
    )
}

export default Footer