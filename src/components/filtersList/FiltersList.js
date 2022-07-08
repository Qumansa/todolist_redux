import classNames from 'classnames';

import { useGetFiltersQuery } from '../../api/filtersApi';
import FiltersItem from '../filtersItem/FiltersItem';

import './filtersList.sass';

const FiltersList = () => {
    const {
        data: filters = [],
        isError,
    } = useGetFiltersQuery();

    // const btnClassNames = classNames({
    //     'to-do-list__button': true,
    //     'to-do-list__button_active': favourite
    // });

    // const renderFilters = (arr) => {
    //     if (arr.length === 0) {
    //         return;
    //     }

    //     const items = arr.map(({name, className, label}) => {
    //         const btnClass = classNames('btn', className, {
    //             'active': name === activeFilter
    //         });
            
    //         return (
    //             <button 
    //                 key={id} 
    //                 // id={name} 
    //                 // className={btnClass}
    //                 onClick={() => dispatch(filtersChanged(name))}>
    //                 {name}
    //             </button>
    //         );
    //     });

    //     return (
    //         <ul className="filter">
    //             {items}
    //         </ul>
    //     );
    // };

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return;
        }

        const items = arr.map(({id, ...props}) => (
            <FiltersItem 
                key={id} 
                {...props}/>
        ));

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