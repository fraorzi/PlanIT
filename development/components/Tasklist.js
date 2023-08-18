import React, { useState, useEffect } from 'react';

function TaskList({ active }) {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (taskInput && editIndex === null) {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        } else if (taskInput && editIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = taskInput;
            setTasks(updatedTasks);
            setEditIndex(null);
            setTaskInput('');
        }
    };

    const handleEditTask = index => {
        setTaskInput(tasks[index]);
        setEditIndex(index);
    };

    const handleDeleteTask = index => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <section className={`tasks ${active ? 'active' : ''}`}>
            <h2>Lista zadań</h2>
            <input type="text" value={taskInput} onChange={e => setTaskInput(e.target.value)} placeholder="Nowe zadanie..." />
            <button onClick={handleAddTask}>{editIndex !== null ? 'Zapisz zmiany' : 'Dodaj zadanie'}</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleEditTask(index)}>Edytuj</button>
                        <button onClick={() => handleDeleteTask(index)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default TaskList;
