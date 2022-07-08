import { useCallback, useMemo } from 'react';
import { useGetToDoListQuery, useDeleteToDoItemMutation, useToggleFavouriteToDoItemMutation } from '../../api/todosApi';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import ToDoItem from '../toDoItem/ToDoItem';

import './toDoList.sass';

const ToDoList = () => {
    const {
        data: toDoList = [],
        isLoading,
        isError,
    } = useGetToDoListQuery();

    const [deleteToDoItem] = useDeleteToDoItemMutation();
    const [toggleFavouriteToDoItem] = useToggleFavouriteToDoItemMutation();

    const onDeleteToDoItem = useCallback((id) => {
        deleteToDoItem(id);
        // eslint-disable-next-line
    }, []);

    const onToggleFavouriteToDoItem = useCallback((id, favourite) => {
        const data = {
            id,
            favourite: !favourite
        };

        toggleFavouriteToDoItem(data);
        // eslint-disable-next-line
    }, []);

    // const filteredToDoList = useMemo(() => {
    //     const filteredToDoList = [...toDoList];

    //     return filteredToDoList;
    // }, [toDoList]);

    const renderToDoList = (arr) => {
        if (arr.length === 0) {
            return <span>There are no tasks yet!</span>;
        }

        const items = arr.map(({id, favourite, ...props}, index) => (
            <ToDoItem 
                key={id} 
                index={index}
                favourite={favourite}
                {...props}
                onDelete={() => onDeleteToDoItem(id)}
                onToggle={() => onToggleFavouriteToDoItem(id, favourite)}/>
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
        : isLoading 
        ? <Spinner/>
        : elements;

    return (
        <>
            {view}
        </>
    );
};

export default ToDoList;