import React from 'react';

function Sidebar({ onTaskToggle, onMealToggle }) {
    return (
        <div className="sidebar">
            <button onClick={onTaskToggle}>Zadania</button>
            <button onClick={onMealToggle}>Posiłki</button>
        </div>
    );
}

export default Sidebar;
