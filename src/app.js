console.log('App.js is running');

let app = {
    title: 'TEST TITLE',
    subtitle: 'TESTE SUBTITLE'
}


let template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info!</p>
        <ol>
            <li>{app.title}</li>
            <li>{app.subtitle}</li>
        </ol>
    </div>
)
let user = {
    name: 'Lucas',
    age: 27,
    location: 'Fortaleza'
};

function getLocation(location){
    return location ? <p>Location: {location}</p> : undefined;
}

let template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)


const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);