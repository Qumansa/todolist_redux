import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useCreateToDoItemMutation } from '../../api/todosApi';

import './form.sass';

const Form = () => {
    const [task, setTask] = useState('');

    const [createToDoItem] = useCreateToDoItemMutation();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newToDoItem = {
            id: uuidv4(),
            description: task, 
            favourite: false
        };

        createToDoItem(newToDoItem).unwrap();

        setTask('');
    };

    return (
        <form 
            className="form"
            onSubmit={onSubmitHandler}>
            <input 
                className="input"
                type="text" 
                name="task-name"
                value={task}
                placeholder="Type in a new task"
                onChange={(e) => setTask(e.target.value)}/>
            <button 
                className="button button_light-steel-blue" 
                type="submit">
                Add
            </button>
        </form>
    );
};

export default Form;