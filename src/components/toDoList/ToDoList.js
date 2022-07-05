import './toDoList.sass';

const ToDoList = () => {
    return (
        <section className="to-do-list section">
            <div className="container">
                <h2 className="sr-only">Tasks</h2>
                <div className="to-do-list__wrapper">
                    <ul className="to-do-list__list">
                        <li className="to-do-list__item">
                            <span className="to-do-list__task">Тест 1</span>
                        </li>
                        <li className="to-do-list__item">
                            <span className="to-do-list__task">Тест 2</span>
                        </li>
                        <li className="to-do-list__item">
                            <span className="to-do-list__task">Тест 3</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ToDoList;