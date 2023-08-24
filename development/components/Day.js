import React, { useState } from 'react';
import Modal from 'react-modal';

function DayComponent({ tasks, meals, addTask, addMeal }) {
    const hours = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"];
    const [currentDay, setCurrentDay] = useState(new Date());
    const [modalIsOpen, setModalIsOpen] = useState(false); // State to control modal visibility

    const handleAddTask = (hour) => {
        // TODO: Implement logic to add task
        setModalIsOpen(true);
    };

    const handleAddMeal = (hour) => {
        // TODO: Implement logic to add meal
        setModalIsOpen(true);
    };

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
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                {/* Modal content goes here */}
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
}

export default DayComponent;
