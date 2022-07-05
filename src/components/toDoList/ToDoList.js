import { useCallback, useMemo } from 'react';
import { useGetToDoListQuery } from '../../api/apiSlice';

import ToDoItem from '../toDoItem/ToDoItem';

import './toDoList.sass';

const ToDoList = () => {
    const {
        // data - это те самые данные, которые поступают с сервер при запросе
        // heroes = [] - значение по умолчанию
        data: toDoList = [],
        // означает, что запрос к серверу происходит повторно
        // isFetching,
        // означает, что запрос к серверу происходит впервые
        isLoading, 
        // isSuccess,
        isError,
        // error
    } = useGetToDoListQuery();

    // const filteredToDoList = useMemo(() => {
    //     const filteredToDoList = [...toDoList];

    //     return filteredToDoList;
    // }, [toDoList]);

    const renderToDoList = (arr) => {
        if (arr.length === 0) {
            // return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return (
                <ToDoItem 
                    key={id} 
                    {...props}/>
            );
        });
    };

    const elements = renderToDoList(toDoList);

    return (
        <section className="to-do-list section">
            <div className="container">
                <h2 className="sr-only">Tasks</h2>
                <div className="to-do-list__wrapper">
                    <ul className="to-do-list__list">
                        {elements}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ToDoList;