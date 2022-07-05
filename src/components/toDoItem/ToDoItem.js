import './toDoItem.sass';

const ToDoItem = ({description}) => {
    return (
        <li className="to-do-list__item">
            <span className="to-do-list__description">{description}</span>
        </li>
    );
};

export default ToDoItem;