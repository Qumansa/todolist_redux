import './form.sass';

const Form = () => {
    return (
        <form className="form">
            <input 
                className="form__input"
                type="text" 
                placeholder="Type in a new task"/>
            <button 
                className="form__submit" 
                type="submit">
                Add
            </button>
        </form>
    );
};

export default Form;