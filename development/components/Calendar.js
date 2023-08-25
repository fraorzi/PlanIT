import React, { useState, useEffect } from 'react';

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showNotes, setShowNotes] = useState(false);
    const [notesData, setNotesData] = useState({}); // Stan do przechowywania notatek dla każdego dnia
    const [selectedDay, setSelectedDay] = useState(null);
    const [holidays, setHolidays] = useState({});  // Format: { "1-1-2023": "Nowy Rok" }
    const [newHolidayName, setNewHolidayName] = useState('');

    const handleDeleteHoliday = (dateKey) => {
        setHolidays(prev => {
            const updatedHolidays = { ...prev };
            delete updatedHolidays[dateKey];
            return updatedHolidays;
        });
    }

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

    const handleNoteChange = (e) => {
        setNotesData(prevNotes => ({
            ...prevNotes,
            [selectedDay]: e.target.value
        }));
    };

    const handleAddHoliday = () => {
        if (newHolidayName) {
            const dateKey = `${selectedDay}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
            setHolidays(prev => ({ ...prev, [dateKey]: newHolidayName }));
            setNewHolidayName('');
        }
    };

    useEffect(() => {
        const savedNotes = localStorage.getItem('notesData');
        if (savedNotes) {
            setNotesData(JSON.parse(savedNotes));
        }

        const savedHolidays = localStorage.getItem('holidays');
        if (savedHolidays) {
            setHolidays(JSON.parse(savedHolidays));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notesData', JSON.stringify(notesData));
    }, [notesData]);

    useEffect(() => {
        localStorage.setItem('holidays', JSON.stringify(holidays));
    }, [holidays]);

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
                    <span
                        key={day}
                        className={`day ${selectedDay === day ? "selected" : ""}`}
                        onClick={() => setSelectedDay(day)}
                    >
                        {day}
                    </span>
                ))}
            </div>
            <div className="notes-section">
                <button className="notes-toggle" onClick={() => setShowNotes(!showNotes)}>
                    {showNotes ? "Ukryj notatki" : "Pokaż notatki"}
                </button>
                {showNotes && (
                    <div className="notes-content">
                        <textarea
                            value={notesData[selectedDay] || ''}
                            onChange={handleNoteChange}
                            placeholder="Dodaj notatki tutaj..."
                        />
                    </div>
                )}
            </div>

            <div className="holiday-section">
                {selectedDay && <h3>Wybrana data: {new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay).toLocaleDateString()}</h3>}
                {selectedDay && holidays[`${selectedDay}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`] && (
                    <div className="holiday-display">
                        <p>Dzień ten jest świętem: {holidays[`${selectedDay}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`]}</p>
                        <button className="delete-holiday-btn" onClick={() => handleDeleteHoliday(`${selectedDay}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`)}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3L21 21M18 6L17.6 12M17.2498 17.2527L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6H4M16 6L15.4559 4.36754C15.1837 3.55086 14.4194 3 13.5585 3H10.4416C9.94243 3 9.47576 3.18519 9.11865 3.5M11.6133 6H20M14 14V17M10 10V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                )}
                {selectedDay && (
                    <div className="add-holiday">
                        <input
                            type="text"
                            placeholder="Nazwa święta"
                            value={newHolidayName}
                            onChange={e => setNewHolidayName(e.target.value)}
                        />
                        <button onClick={handleAddHoliday}>Dodaj święto</button>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Calendar;
