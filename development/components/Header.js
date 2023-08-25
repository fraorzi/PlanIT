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
                <a href="/">PlanIt</a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Strona główna</a></li>
                </ul>
            </nav>
            <div className="search-bar">
                <form onSubmit={handleSearchSubmit}>
                    <input type="text" name="searchInput" placeholder="Wyszukaj..." />
                    <button type="submit" className="search-icon-button">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
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
