function Header() {
    const navItems = [
        {
            id: 1,
            text: 'CHARACTERS',
            url: '#',
            active: false,
        },
        {
            id: 2,
            text: 'COMICS',
            url: '#',
            active: true,
        },
        {
            id: 3,
            text: 'MOVIES',
            url: '#',
            active: false,
        },
        {
            id: 4,
            text: 'TV',
            url: '#',
            active: false,
        },
        {
            id: 5,
            text: 'GAMES',
            url: '#',
            active: false,
        },
        {
            id: 6,
            text: 'COLLECTIBLES',
            url: '#',
            active: false,
        },
        {
            id: 7,
            text: 'VIDEOS',
            url: '#',
            active: false,
        },
        {
            id: 8,
            text: 'FANS',
            url: '#',
            active: false,
        },
        {
            id: 9,
            text: 'NEWS',
            url: '#',
            active: false,
        },
        {
            id: 10,
            text: 'SHOP',
            url: '#',
            active: false,
        },
    ]

    return (
        <header>
            <div className="container header-container">
                <img className="logo" src="/img/dc-logo.png" alt="DC Logo" />

                <nav>
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.id} className={item.active ? 'active' : ''}>
                                <a href={item.url}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header