import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import TaskList from './Tasklist';
import MealList from './MealList';

function DayComponent({ tasks, meals }) {
    const hours = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"];
    const [currentDay, setCurrentDay] = useState(new Date());
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('task');
    const [selectedHour, setSelectedHour] = useState(null);
    const [internalTasks, setInternalTasks] = useState(JSON.parse(localStorage.getItem('day_tasks')) || tasks);
    const [internalMeals, setInternalMeals] = useState(JSON.parse(localStorage.getItem('day_meals')) || meals);

    useEffect(() => {
        localStorage.setItem('day_tasks', JSON.stringify(internalTasks));
    }, [internalTasks]);

    useEffect(() => {
        localStorage.setItem('day_meals', JSON.stringify(internalMeals));
    }, [internalMeals]);

    const handleAddTask = (hour) => {
        setSelectedHour(hour);
        setModalIsOpen(true);
        setModalContent('task');
    };

    const handleAddMeal = (hour) => {
        setSelectedHour(hour);
        setModalIsOpen(true);
        setModalContent('meal');
    };

    const handleTaskSelected = (task) => {
        setInternalTasks(prevTasks => ({ ...prevTasks, [selectedHour]: task }));
        setModalIsOpen(false);
    };

    const handleMealSelected = (meal) => {
        setInternalMeals(prevMeals => ({ ...prevMeals, [selectedHour]: meal }));
        setModalIsOpen(false);
    };

    const handleRemoveTask = (hour) => {
        setInternalTasks(prevTasks => {
            const updatedTasks = { ...prevTasks };
            delete updatedTasks[hour];
            return updatedTasks;
        });
    };

    const handleRemoveMeal = (hour) => {
        setInternalMeals(prevMeals => {
            const updatedMeals = { ...prevMeals };
            delete updatedMeals[hour];
            return updatedMeals;
        });
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
                            <td onClick={() => handleAddTask(hour)}>
                                <div className="task-container">
                                {internalTasks[hour] || "Kliknij, aby dodać"}
                                {internalTasks[hour] && <span className="delete-holiday-btn" onClick={(e) => { e.stopPropagation(); handleRemoveTask(hour); }}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3L21 21M18 6L17.6 12M17.2498 17.2527L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6H4M16 6L15.4559 4.36754C15.1837 3.55086 14.4194 3 13.5585 3H10.4416C9.94243 3 9.47576 3.18519 9.11865 3.5M11.6133 6H20M14 14V17M10 10V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>}
                                </div>
                            </td>
                            <td onClick={() => handleAddMeal(hour)}>
                                <div className="task-container">
                                {internalMeals[hour] || "Kliknij, aby dodać"}
                                {internalMeals[hour] && <span className="delete-holiday-btn" onClick={(e) => { e.stopPropagation(); handleRemoveMeal(hour); }}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3L21 21M18 6L17.6 12M17.2498 17.2527L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6H4M16 6L15.4559 4.36754C15.1837 3.55086 14.4194 3 13.5585 3H10.4416C9.94243 3 9.47576 3.18519 9.11865 3.5M11.6133 6H20M14 14V17M10 10V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="day-modal"
            >
                <div className="modal-buttons-container">
                    <button className="main-button" onClick={() => setModalContent('task')}>Zadanie</button>
                    <button className="main-button" onClick={() => setModalIsOpen(false)}>Zamknij</button>
                    <button className="main-button" onClick={() => setModalContent('meal')}>Posiłek</button>
                </div>
                {modalContent === 'task' && <TaskList onTaskSelected={handleTaskSelected} inModal={true} />}
                {modalContent === 'meal' && <MealList onMealSelected={handleMealSelected} inModal={true} />}
                </Modal>
        </div>
    );
}
export default DayComponent;
