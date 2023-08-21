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

    return (
        <header className="fixed-header">  {/* Dodajemy tutaj klasę */}
            <div className="logo">
                PlanIt   {/* Nazwa aplikacji */}
            </div>
            <nav>
                <ul>
                    <li><a href="/">Strona główna</a></li>
                    <li><a href="/kontakt">Kontakt</a></li>
                    {/* Możesz dodać więcej linków nawigacyjnych w przyszłości */}
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Wyszukaj..." />
            </div>
            <div className="actions">
                <button>Zaloguj się</button>
                {/* Możesz dodać więcej przycisków akcji w przyszłości */}
            </div>
            <div className="user-info">
                {/* Tutaj będzie wyświetlane imię użytkownika i avatar, jeśli jest zalogowany */}
            </div>
            <div className="theme-switcher">
                {/* Przełącznik motywu */}
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