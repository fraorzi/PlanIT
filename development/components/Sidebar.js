import React from 'react';

function Sidebar({ onSectionToggle, activeSection }) {
    return (
        <div className="sidebar">
            <button onClick={() => onSectionToggle(activeSection === "none" ? "both" : "none")}>
                {activeSection === "none" ? "Pokaż planer" : "Ukryj planer"}
            </button>
        </div>
    );
}

export default Sidebar;
