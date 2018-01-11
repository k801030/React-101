import React from 'react'
import ReactDOM from 'react-dom' 

function formatName(user) {
    return user.firstName + " " + user.lastName;
}

const user = {
    firstName: "Vison",
    lastName: "Li"
}

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>This is {this.props.name}</h2>
            </div>
        )
    }
}
    
const element = <Welcome name="Vison Li"/>;

ReactDOM.render(
    element,
    document.getElementById('root')
)