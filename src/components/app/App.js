import Header from '../header/Header';
import ToDoList from '../toDoList/ToDoList';

import '../../style/_base.sass';

const App = () => {
  	return (
    	<>
			<Header/>
			<main>
				<ToDoList/>
			</main>
    	</>
  	);
};

export default App;
