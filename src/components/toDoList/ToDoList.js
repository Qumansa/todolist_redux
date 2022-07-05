import { useCallback, useMemo } from 'react';
import { useGetToDoListQuery } from '../../api/apiSlice';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import ToDoItem from '../toDoItem/ToDoItem';

import './toDoList.sass';

const ToDoList = () => {
    const {
        data: toDoList = [],
        isFetching,
        isLoading, 
        isError,
    } = useGetToDoListQuery();

    // const filteredToDoList = useMemo(() => {
    //     const filteredToDoList = [...toDoList];

    //     return filteredToDoList;
    // }, [toDoList]);

    const spinner = isLoading ? <Spinner/> : null;
    const errorMessage = isError ? <ErrorMessage/> : null;

    const renderToDoList = (arr) => {
        if (arr.length === 0 && !isFetching) {
            return <span>There are no tasks yet!</span>;
        }

        const items = arr.map(({id, ...props}) => {
            return (
                <ToDoItem 
                    key={id} 
                    {...props}/>
            );
        });

        return (
            <ul className="to-do-list__list">
                {items}
            </ul>
        );
    };

    const elements = renderToDoList(toDoList);

    return (
        <section className="to-do-list section">
            <div className="container">
                <h2 className="sr-only">Tasks</h2>
                <div className="to-do-list__wrapper">
                    {spinner}
                    {errorMessage}
                    {elements}
                </div>
            </div>
        </section>
    );
};

export default ToDoList;