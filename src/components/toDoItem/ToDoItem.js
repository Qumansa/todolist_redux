import './toDoItem.sass';

const ToDoItem = ({description, onDelete}) => {
    return (
        <li className="to-do-list__item">
            <span className="to-do-list__description">{description}</span>
            <button 
                className="to-do-list__button" 
                aria-label="Delete"
                onClick={onDelete}>
                    <svg className="to-do-list__button-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M24,41h77v63c0,9.37-7.63,17-17,17H44c-9.37,0-17-7.63-17-17V52c0-1.66-1.34-3-3-3s-3,1.34-3,3v52c0,12.68,10.32,23,23,23 h40c12.68,0,23-10.32,23-23V40.64c5.72-1.36,10-6.5,10-12.64c0-7.17-5.83-13-13-13H24c-7.17,0-13,5.83-13,13S16.83,41,24,41z M24,21h80c3.86,0,7,3.14,7,7s-3.14,7-7,7H24c-3.86,0-7-3.14-7-7S20.14,21,24,21z"/><path d="M49,7h30c1.66,0,3-1.34,3-3s-1.34-3-3-3H49c-1.66,0-3,1.34-3,3S47.34,7,49,7z"/><path d="M53,104V58c0-1.66-1.34-3-3-3s-3,1.34-3,3v46c0,1.66,1.34,3,3,3S53,105.66,53,104z"/><path d="M81,104V58c0-1.66-1.34-3-3-3s-3,1.34-3,3v46c0,1.66,1.34,3,3,3S81,105.66,81,104z"/></svg>
            </button>
        </li>
    );
};

export default ToDoItem;