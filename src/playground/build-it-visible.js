class BuildIt extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Build It</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>

                {this.state.visibility ? <p>Showing information!</p> : null}
            </div>
        )
    }
}


ReactDOM.render(<BuildIt/>, document.getElementById('app'));


// let buildIt = {
//     title: 'Visibility Toggle',
//     buttonText: 'Show Details',
//     showInfo: false
// }

// const appRoot = document.getElementById('app');

// let toggleVisibility = () => {
//     buildIt.showInfo = !buildIt.showInfo;
//     renderVisibilityApp()
// ;}


// const renderVisibilityApp = () => {
//     let template = (
//         <div>
//             <h1>{buildIt.title}</h1>
    
//             <button onClick={toggleVisibility}>
//                 {buildIt.showInfo ? 'Hide Details' : 'Show Details'}
//             </button>

//             {buildIt.showInfo ? <p>Showing information!</p> : null}
//         </div>
//     )

//     ReactDOM.render(template, appRoot);
// }

// renderVisibilityApp();