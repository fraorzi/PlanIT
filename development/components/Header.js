import React, { useState, useEffect } from 'react';

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', e.target.searchInput.value);
    };

    return (
        <header className="fixed-header">
            <div className="logo">
                PlanIt
            </div>
            <nav>
                <ul>
                    <li><a href="/">Strona główna</a></li>
                    <li><a href="/kontakt">Kontakt</a></li>
                </ul>
            </nav>
            <div className="search-bar">
                <form onSubmit={handleSearchSubmit}>
                    <input type="text" name="searchInput" placeholder="Wyszukaj..." />
                    <button type="submit">Wyszukaj</button>
                </form>
            </div>
            <div className="actions">
                <button>Zaloguj się</button>
            </div>
            <div className="user-info">
            </div>
            <div className="theme-switcher">
                <label>
                    Jasny
                    <input type="checkbox" onChange={toggleTheme} checked={darkMode} />
                    Ciemny
                </label>
            </div>
        </header>
    );
}

export default Header;
