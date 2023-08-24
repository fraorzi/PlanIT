import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import MealList from './components/MealList';
import DayComponent from './components/Day';
import Calendar from "./components/Calendar";
import Footer from './components/Footer';
import './scss/main.scss';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState("none");  // "none", "both" or "calendar"
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
            <Sidebar onSectionToggle={(section) => {
                if (section === 'calendar') {
                    setActiveSection(prev => prev === 'calendar' ? "none" : 'calendar');
                } else {
                    setActiveSection(prev => prev === section ? "none" : section);
                }
            }} activeSection={activeSection} />
            {activeSection === "calendar" && <Calendar />}
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
