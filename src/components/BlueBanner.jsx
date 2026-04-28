function BlueBanner() {
    const items = [
        {
            id: 1,
            image: '/img/buy-comics-digital-comics.png',
            text: 'DIGITAL COMICS',
        },
        {
            id: 2,
            image: '/img/buy-comics-merchandise.png',
            text: 'DC MERCHANDISE',
        },
        {
            id: 3,
            image: '/img/buy-comics-subscriptions.png',
            text: 'SUBSCRIPTION',
        },
        {
            id: 4,
            image: '/img/buy-comics-shop-locator.png',
            text: 'COMIC SHOP LOCATOR',
        },
        {
            id: 5,
            image: '/img/buy-dc-power-visa.svg',
            text: 'DC POWER VISA',
        },
    ]

    return (
        <section className="blue-banner">
            <div className="container banner-container">
                {items.map((item) => (
                    <div className="banner-item" key={item.id}>
                        <img src={item.image} alt={item.text} />
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BlueBanner