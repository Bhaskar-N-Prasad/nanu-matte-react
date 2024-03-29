import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp(){
    return(
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = 'chai aur react'

const reactElement = React.createElement(
    'a',
    {href:'https://github.com'},
    'Github',
    anotherUser //-> Evaluated expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
