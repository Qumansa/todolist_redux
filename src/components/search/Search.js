import { useDispatch, useSelector } from 'react-redux';
import { searchChanged } from './searchSlice';

const Search = () => {
    const {searchValue} = useSelector(state => state.search);
    const dispatch = useDispatch();

    return (
        <input 
            type="text" 
            className="input input_search"
            placeholder="Search a task"
            value={searchValue}
            onChange={(e) => dispatch(searchChanged(e.target.value))}/>
    );
};

export default Search;