import React, { useState, useEffect } from 'react';

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showNotes, setShowNotes] = useState(false);
    const [notesData, setNotesData] = useState({}); // Stan do przechowywania notatek dla każdego dnia
    const [selectedDay, setSelectedDay] = useState(null);
    const [holidays, setHolidays] = useState({});  // Format: { "1-1-2023": "Nowy Rok" }
    const [newHolidayName, setNewHolidayName] = useState('');

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
        // Wczytywanie notatek z localStorage podczas montowania komponentu
        const savedNotes = localStorage.getItem('notesData');
        if (savedNotes) {
            setNotesData(JSON.parse(savedNotes));
        }

        // Wczytywanie świąt z localStorage podczas montowania komponentu
        const savedHolidays = localStorage.getItem('holidays');
        if (savedHolidays) {
            setHolidays(JSON.parse(savedHolidays));
        }
    }, []);

    useEffect(() => {
        // Zapisywanie notatek do localStorage za każdym razem, gdy się zmieniają
        localStorage.setItem('notesData', JSON.stringify(notesData));
    }, [notesData]);

    useEffect(() => {
        // Zapisywanie świąt do localStorage za każdym razem, gdy się zmieniają
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
                {selectedDay && holidays[`${selectedDay}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`] &&
                    <p>Dzień ten jest świętem: {holidays[`${selectedDay}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`]}</p>}

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
