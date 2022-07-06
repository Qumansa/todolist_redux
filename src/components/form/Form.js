import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useCreateToDoItemMutation } from '../../api/apiSlice';

import './form.sass';

const Form = () => {
    const [task, setTask] = useState('');

    const [createToDoItem] = useCreateToDoItemMutation();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newToDoItem = {
            id: uuidv4(),
            description: task
        };

        createToDoItem(newToDoItem).unwrap();

        setTask('');
    };

    return (
        <form 
            className="form"
            onSubmit={onSubmitHandler}>
            <input 
                className="form__input"
                type="text" 
                name="task-name"
                value={task}
                placeholder="Type in a new task"
                onChange={(e) => setTask(e.target.value)}/>
            <button 
                className="form__submit" 
                type="submit">
                Add
            </button>
        </form>
    );
};

export default Form;