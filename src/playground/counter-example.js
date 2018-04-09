const appRoot = document.getElementById('app');

let count = 0;
const addOne = () => {
    count++;
    console.log('AddOne', count);
    renderCounterApp();
};
const minusOne = () => {
    count--;
    console.log('MinusOne');
    renderCounterApp();
}
const resetCount = () => {
    count = 0;
    console.log('Reset');
    renderCounterApp();
}



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();