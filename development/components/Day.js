import React, { useState } from 'react';

function DayComponent({ tasks, meals, addTask, addMeal }) {
    const hours = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"];
    const [currentDay, setCurrentDay] = useState(new Date());

    return (
        <div className="day-component">
            <div className="navigation-buttons">
                <button onClick={() => setCurrentDay(prevDay => new Date(prevDay.setDate(prevDay.getDate() - 1)))}>Poprzedni dzień</button>
                <button onClick={() => setCurrentDay(prevDay => new Date(prevDay.setDate(prevDay.getDate() + 1)))}>Następny dzień</button>
            </div>
            <h2>{currentDay.toLocaleDateString()}</h2>
            <table>
                <thead>
                <tr>
                    <th>Godzina</th>
                    <th>Zadania</th>
                    <th>Posiłki</th>
                </tr>
                </thead>
                <tbody>
                {hours.map(hour => (
                    <tr key={hour}>
                        <td>{hour}</td>
                        <td onClick={() => handleAddTask(hour)}>{tasks[hour] || "Kliknij, aby dodać"}</td>
                        <td onClick={() => handleAddMeal(hour)}>{meals[hour] || "Kliknij, aby dodać"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DayComponent;
