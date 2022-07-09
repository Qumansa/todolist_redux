// import classNames from 'classnames';
// import { useCallback } from 'react';

import './filter.sass';

const FiltersList = () => {

    return (
        <>
            <ul className="filter">
                <li className="filter__item">
                    <button 
                        className="
                            button
                            button_light-steel-blue
                            button_light-steel-blue_active">
                        All
                    </button>
                </li>
                <li className="filter__item">
                    <button 
                        className="
                            button
                            button_light-steel-blue">
                        Favourite
                    </button>
                </li>
            </ul>
        </>
    );
};

export default FiltersList;