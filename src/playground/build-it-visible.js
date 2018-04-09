
let buildIt = {
    title: 'Visibility Toggle',
    buttonText: 'Show Details',
    showInfo: false
}

const appRoot = document.getElementById('app');

let toggleVisibility = () => {
    buildIt.showInfo = !buildIt.showInfo;
    renderVisibilityApp()
;}


const renderVisibilityApp = () => {
    let template = (
        <div>
            <h1>{buildIt.title}</h1>
    
            <button onClick={toggleVisibility}>
                {buildIt.showInfo ? 'Hide Details' : 'Show Details'}
            </button>

            {buildIt.showInfo ? <p>Showing information!</p> : null}
        </div>
    )

    ReactDOM.render(template, appRoot);
}

renderVisibilityApp();