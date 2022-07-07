import classNames from 'classnames';

import './filter.sass';

const Filter = () => {
    // const btnClassNames = classNames({
    //     'to-do-list__button': true,
    //     'to-do-list__button_active': favourite
    // });

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return;
        }

        const items = arr.map(({name, className, label}) => {
            const btnClass = classNames('btn', className, {
                'active': name === activeFilter
            });
            
            return (
                <button 
                    key={id} 
                    // id={name} 
                    // className={btnClass}
                    onClick={() => dispatch(filtersChanged(name))}>
                    {name}
                </button>
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
            {/* <ul className="filter">
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
            </ul> */}
        </>
    );
};

export default Filter;