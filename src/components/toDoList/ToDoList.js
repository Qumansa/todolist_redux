import { useGetToDoListQuery } from '../../api/todosApi';
import { useSelector } from 'react-redux';

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

    const {searchValue} = useSelector(state => state.search);
    const {activeFilter} = useSelector(state => state.filter);

    const searchTask = (tasks, searchValue) => {
        if (searchValue.length === 0) {
			return tasks;
		}

        return tasks.filter((task) => {
			return task.description.toLowerCase().includes(searchValue.trim().toLowerCase());
		});
    };

    const filterToDoList = (toDoList) => {
        switch(activeFilter) {
            case 'All': 
                return toDoList;
            case 'Favourite':
                return toDoList.filter(filter => filter.favourite);
            case 'A...z':
                return [...toDoList].sort((a, b) => {
                    return a.description.toLowerCase() < b.description.toLowerCase() ? -1 : 1;
                });
            case 'Z...a':
                return [...toDoList].sort((a, b) => {
                    return a.description.toLowerCase() > b.description.toLowerCase() ? -1 : 1;
                });
            default:
                return toDoList;
        }
    };

    const renderToDoList = (tasks) => {
        if (tasks.length === 0) {
            return <span>There are no tasks yet!</span>;
        }

        const items = tasks.map(({id, ...props}, index) => (
            <ToDoItem 
                key={id} 
                id={id}
                index={index}
                {...props}/>
        ));

        return (
            <ul className="to-do-list__list">
                {items}
            </ul>
        );
    };

    const filteredToDoList = filterToDoList(searchTask(toDoList, searchValue));

    const elements = renderToDoList(filteredToDoList);

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