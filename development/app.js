import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import MealList from './components/MealList';
import Footer from './components/Footer';
import './scss/main.scss';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [showTasks, setShowTasks] = useState(false);
    const [showMeals, setShowMeals] = useState(false);

    return (
        <div>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Sidebar onTaskToggle={() => setShowTasks(prev => !prev)} onMealToggle={() => setShowMeals(prev => !prev)} />
            {showTasks && <TaskList />}
            {showMeals && <MealList />}
            <Footer />
        </div>
    );
}

export default App;
