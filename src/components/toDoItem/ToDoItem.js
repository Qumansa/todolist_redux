import './toDoItem.sass';

const ToDoItem = ({index, onDelete, onToggle, description, favourite}) => {
    let btnClassNames = "to-do-list__button";

    if (favourite) {
        btnClassNames += " to-do-list__button_active";
    }

    return (
        <li className="to-do-list__item">
            <span className="to-do-list__description">{index + 1}) {description}</span>
            <ul className="to-do-list__buttons">
                <li className="to-do-list__buttons-item">
                    <button
                        className={btnClassNames}
                        aria-label="Favourite"
                        onClick={onToggle}>
                        <svg className="to-do-list__button-img to-do-list__button-img_favourite" viewBox="-1 0 18 15" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4829 5.28193L10.6864 4.59758L8.54222 0.330127C8.48365 0.213287 8.38731 0.118702 8.26829 0.0612089C7.96981 -0.0834504 7.6071 0.037099 7.45786 0.330127L5.3137 4.59758L0.517213 5.28193C0.384974 5.30047 0.26407 5.36167 0.171503 5.45441C0.0595945 5.56733 -0.0020722 5.71924 5.31712e-05 5.87678C0.00217854 6.03431 0.0679221 6.18457 0.182838 6.29454L3.65316 9.61614L2.83328 14.3064C2.81405 14.4156 2.82635 14.5278 2.86878 14.6304C2.91121 14.733 2.98207 14.8218 3.07333 14.8869C3.16459 14.952 3.27259 14.9906 3.38509 14.9985C3.4976 15.0064 3.6101 14.9831 3.70983 14.9314L8.00004 12.717L12.2902 14.9314C12.4074 14.9926 12.5434 15.013 12.6737 14.9908C13.0024 14.9352 13.2235 14.6291 13.1668 14.3064L12.3469 9.61614L15.8172 6.29454C15.9117 6.20367 15.974 6.08497 15.9929 5.95515C16.0439 5.63059 15.8135 5.33015 15.4829 5.28193Z" fill="white"></path>
                        </svg>
                    </button>
                </li>
                <li className="to-do-list__buttons-item">
                    <button 
                        className="to-do-list__button" 
                        aria-label="Delete"
                        onClick={onDelete}>
                        <svg className="to-do-list__button-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M24,41h77v63c0,9.37-7.63,17-17,17H44c-9.37,0-17-7.63-17-17V52c0-1.66-1.34-3-3-3s-3,1.34-3,3v52c0,12.68,10.32,23,23,23 h40c12.68,0,23-10.32,23-23V40.64c5.72-1.36,10-6.5,10-12.64c0-7.17-5.83-13-13-13H24c-7.17,0-13,5.83-13,13S16.83,41,24,41z M24,21h80c3.86,0,7,3.14,7,7s-3.14,7-7,7H24c-3.86,0-7-3.14-7-7S20.14,21,24,21z"/><path d="M49,7h30c1.66,0,3-1.34,3-3s-1.34-3-3-3H49c-1.66,0-3,1.34-3,3S47.34,7,49,7z"/><path d="M53,104V58c0-1.66-1.34-3-3-3s-3,1.34-3,3v46c0,1.66,1.34,3,3,3S53,105.66,53,104z"/><path d="M81,104V58c0-1.66-1.34-3-3-3s-3,1.34-3,3v46c0,1.66,1.34,3,3,3S81,105.66,81,104z"/></svg>
                    </button>
                </li>
            </ul>
        </li>
    );
};

export default ToDoItem;