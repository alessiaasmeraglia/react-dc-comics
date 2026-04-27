function Header() {
    const navItems = [
        'CHARACTERS',
        'COMICS',
        'MOVIES',
        'TV',
        'GAMES',
        'COLLECTIBLES',
        'VIDEOS',
        'FANS',
        'NEWS',
        'SHOP',
    ]

    return (
        <header>
            <div className="container header-container">
                <img className="logo" src="/img/dc-logo.png" alt="DC Logo" />

                <nav>
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item} className={item === 'COMICS' ? 'active' : ''}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header