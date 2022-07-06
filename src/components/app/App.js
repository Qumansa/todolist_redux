import Header from '../header/Header';
import Form from '../form/Form';
import ToDoList from '../toDoList/ToDoList';

import '../../style/_base.sass';

const App = () => {
  	return (
    	<>
			<Header/>
			<main>
				<section className="to-do-list section">
					<div className="container">
						<h2 className="sr-only">Tasks</h2>
						<div className="to-do-list__wrapper">
							<Form/>
							<ToDoList/>
						</div>
					</div>
				</section>
			</main>
    	</>
  	);
};

export default App;
