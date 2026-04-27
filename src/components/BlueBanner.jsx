function BlueBanner() {
    const items = [
        {
            image: '/img/buy-comics-digital-comics.png',
            text: 'DIGITAL COMICS',
        },
        {
            image: '/img/buy-comics-merchandise.png',
            text: 'DC MERCHANDISE',
        },
        {
            image: '/img/buy-comics-subscriptions.png',
            text: 'SUBSCRIPTION',
        },
        {
            image: '/img/buy-comics-shop-locator.png',
            text: 'COMIC SHOP LOCATOR',
        },
        {
            image: '/img/buy-dc-power-visa.svg',
            text: 'DC POWER VISA',
        },
    ]

    return (
        <section className="blue-banner">
            <div className="container banner-container">
                {items.map((item) => (
                    <div className="banner-item" key={item.text}>
                        <img src={item.image} alt={item.text} />
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BlueBanner