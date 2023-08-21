import React, { useState, useEffect } from 'react';

function MealList({ active }) {
    const [meals, setMeals] = useState([]);
    const [mealInput, setMealInput] = useState('');
    const [caloriesInput, setCaloriesInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const savedMeals = JSON.parse(localStorage.getItem('meals')) || [];
        setMeals(savedMeals);
    }, []);

    useEffect(() => {
        localStorage.setItem('meals', JSON.stringify(meals));
    }, [meals]);

    const handleAddMeal = () => {
        if (mealInput && caloriesInput && editIndex === null) {
            setMeals([...meals, { name: mealInput, calories: caloriesInput }]);
            setMealInput('');
            setCaloriesInput('');
        } else if (mealInput && caloriesInput && editIndex !== null) {
            const updatedMeals = [...meals];
            updatedMeals[editIndex] = { name: mealInput, calories: caloriesInput };
            setMeals(updatedMeals);
            setEditIndex(null);
            setMealInput('');
            setCaloriesInput('');
        }
    };

    const handleEditMeal = index => {
        setMealInput(meals[index].name);
        setCaloriesInput(meals[index].calories);
        setEditIndex(index);
    };

    const handleDeleteMeal = index => {
        const updatedMeals = [...meals];
        updatedMeals.splice(index, 1);
        setMeals(updatedMeals);
    };

    return (
        <section className={`meals ${active ? 'active' : ''}`}>
            <h2>Lista posiłków</h2>
            <input type="text" value={mealInput} onChange={e => setMealInput(e.target.value)} placeholder="Nazwa posiłku..." />
            <input type="number" value={caloriesInput} onChange={e => setCaloriesInput(e.target.value)} placeholder="Kalorie..." />
            <button onClick={handleAddMeal}>{editIndex !== null ? 'Zapisz zmiany' : 'Dodaj posiłek'}</button>
            <ul>
                {meals.map((meal, index) => (
                    <li key={index}>
                        {meal.name} - {meal.calories} kcal
                        <button onClick={() => handleEditMeal(index)}>Edytuj</button>
                        <button onClick={() => handleDeleteMeal(index)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default MealList;