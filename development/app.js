import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import MealList from './components/MealList';
import DayComponent from './components/Day';
import Footer from './components/Footer';
import './scss/main.scss';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState("none");  // "none" or "both"
    const [tasks, setTasks] = useState({});  // Format: { "04:00": "Przykładowe zadanie" }
    const [meals, setMeals] = useState({});  // Format: { "12:00": "Przykładowy posiłek" }

    const handleAddTask = (hour, task) => {
        setTasks(prevTasks => ({ ...prevTasks, [hour]: task }));
    };

    const handleAddMeal = (hour, meal) => {
        setMeals(prevMeals => ({ ...prevMeals, [hour]: meal }));
    };

    return (
        <div>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Sidebar onSectionToggle={(section) => setActiveSection(prev => prev === section ? "none" : section)} activeSection={activeSection} />
            {activeSection === "both" && (
                <>
                    <DayComponent tasks={tasks} meals={meals} addTask={handleAddTask} addMeal={handleAddMeal} />
                    <TaskList />
                    <MealList />
                </>
            )}
            <Footer />
        </div>
    );
}

export default App;
