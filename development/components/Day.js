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
                                {internalTasks[hour] || "Kliknij, aby dodać"}
                                {internalTasks[hour] && <span onClick={(e) => { e.stopPropagation(); handleRemoveTask(hour); }}> [Usuń]</span>}
                            </td>
                            <td onClick={() => handleAddMeal(hour)}>
                                {internalMeals[hour] || "Kliknij, aby dodać"}
                                {internalMeals[hour] && <span onClick={(e) => { e.stopPropagation(); handleRemoveMeal(hour); }}> [Usuń]</span>}
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
