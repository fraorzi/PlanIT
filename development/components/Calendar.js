import React, { useState } from 'react';

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const generateDays = () => {
        const days = [];
        for (let i = 1; i <= daysInMonth(currentDate); i++) {
            days.push(i);
        }
        return days;
    };

    const days = generateDays();

    return (
        <div className="calendar-component">
            <div className="calendar-header">
                <button onClick={() => setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1))}>
                    Poprzedni
                </button>
                <span>{currentDate.toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' })}</span>
                <button onClick={() => setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1))}>
                    Następny
                </button>
            </div>
            <div className="calendar-days">
                {days.map(day => (
                    <span key={day} className="day">{day}</span>
                ))}
            </div>
        </div>
    );
}

export default Calendar;
