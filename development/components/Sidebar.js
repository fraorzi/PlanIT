import React from 'react';

function Sidebar({ onSectionToggle, activeSection }) {
    return (
        <div className="sidebar">
            <button onClick={() => {
                if (activeSection === "both") {
                    onSectionToggle("none");
                } else {
                    onSectionToggle("both");
                }
            }}>
                {activeSection === "both" ? "Ukryj planer" : "Pokaż planer"}
            </button>
            <button onClick={() => {
                if (activeSection === "calendar") {
                    onSectionToggle("none");
                } else {
                    onSectionToggle("calendar");
                }
            }}>
                {activeSection === "calendar" ? "Ukryj kalendarz" : "Pokaż kalendarz"}
            </button>
        </div>
    );
}

export default Sidebar;
