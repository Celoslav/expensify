console.log("Hello");
var app = {
    title: 'Indecision App',
    subtitle: 'App subtitle'
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item two</li>
            <li>...</li>
        </ol>
    </div>
);
var user = {
    name: 'Name',
    age: 34,
    location: 'Rome'
}
function getLocation(location) {
    if (location) {
        return <p>location: {location}</p>;
    } else {
        return undefined;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);