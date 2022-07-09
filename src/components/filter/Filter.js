// import classNames from 'classnames';

import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import { filterChanged } from './filterSlice';

import './filter.sass';

const FiltersList = () => {
    const {filters, activeFilter} = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const renderFilters = (arr) => {
        const items =  arr.map(({name}) => {
            const btnActiveClass = name === activeFilter 
                ? "button_light-steel-blue_active"
                : null;

            return (
                <li 
                    className="filter__item"
                    key={name}>
                    <button 
                        className={`
                            button 
                            button_light-steel-blue 
                            ${btnActiveClass}
                        `}
                        onClick={() => dispatch(filterChanged(name))}>
                        {name}
                    </button>
                </li>
            );
        });

        return (
            <ul className="filter">
                {items}
            </ul>
        );
    };

    const elements = renderFilters(filters);

    return (
        <>
            {elements}
        </>
    );
};

export default FiltersList;