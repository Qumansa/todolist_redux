import { useCallback, useMemo } from 'react';
import { useGetToDoListQuery, useDeleteToDoItemMutation } from '../../api/apiSlice';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import ToDoItem from '../toDoItem/ToDoItem';

import './toDoList.sass';

const ToDoList = () => {
    const {
        data: toDoList = [],
        isFetching,
        isError,
    } = useGetToDoListQuery();

    const [deleteToDoItem] = useDeleteToDoItemMutation();

    const onDeleteToDoItem = useCallback((id) => {
        deleteToDoItem(id);
        // eslint-disable-next-line
    }, []);

    // const filteredToDoList = useMemo(() => {
    //     const filteredToDoList = [...toDoList];

    //     return filteredToDoList;
    // }, [toDoList]);

    const renderToDoList = (arr) => {
        if (arr.length === 0 && !isFetching) {
            return <span>There are no tasks yet!</span>;
        }

        const items = arr.map(({id, ...props}, index) => (
            <ToDoItem 
                key={id} 
                index={index}
                {...props}
                onDelete={() => onDeleteToDoItem(id)}/>
        ));

        return (
            <ul className="to-do-list__list">
                {items}
            </ul>
        );
    };

    const elements = renderToDoList(toDoList);

    const view = isError 
        ? <ErrorMessage/> 
        : isFetching 
        ? <Spinner/> 
        : elements;

    return (
        <>
            {view}
        </>
    );
};

export default ToDoList;