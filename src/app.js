console.log("Hello");
const app = {
    title: 'Indecision App',
    subtitle: 'App subtitle',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        rendering();
    } 
};


const appRoot = document.getElementById('app');
const numbers = [55, 101, 1000]
const removeOptions = () => {
            app.options = [];
            rendering();
};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const rendering = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
        <button onClick={removeOptions}>Remove all</button>
        
        <ol>
            {app.options.map(option => <li key={option}>{option}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>
);

ReactDOM.render(template, appRoot);
};

rendering();
