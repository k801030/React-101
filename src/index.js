import React from 'react'
import ReactDOM from 'react-dom' 

function formatName(user) {
    return user.firstName + " " + user.lastName;
}

const user = {
    firstName: "Vison",
    lastName: "Li"
}


const element2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world! from React.createElement'
)

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    )
}

setInterval(tick, 1000);