import './toDoItem.sass';

const toDoItem = ({description}) => {
    return (
        <li className="to-do-list__item">
            <span className="to-do-list__description">{description}</span>
        </li>
    );
};

export default toDoItem;