console.log('App.js is running');

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>this is App.js</p>
    </div>
)
var user = {
    name: 'Lucas',
    age: 27,
    location: 'Ceará',
};

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)


var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);