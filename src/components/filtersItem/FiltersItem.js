import './filtersItem.sass';

const FiltersItem = ({name, active}) => {
    const btnActiveClass = active ? 'button_light-steel-blue_active' : null;

    return (
        <li className="filter__item">
            <button 
                className={`
                    button
                    button_light-steel-blue
                    ${btnActiveClass}`}>
                {name}
            </button>
        </li>
    );
};

export default FiltersItem;