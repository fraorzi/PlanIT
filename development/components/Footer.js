import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="author-info">
                    PlanIt &copy; {new Date().getFullYear()} - Wszystkie prawa zastrzeżone.
                </div>
                <div className="social-media">
                    {/* Przykładowe ikony mediów społecznościowych (możesz użyć biblioteki ikon) */}
                    <a href="#" className="icon">FB</a>
                    <a href="#" className="icon">TW</a>
                    <a href="#" className="icon">IG</a>
                </div>
                <div className="footer-links">
                    <a href="#">Polityka prywatności</a>
                    <a href="#">Warunki użytkowania</a>
                    <a href="#">Kontakt</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
