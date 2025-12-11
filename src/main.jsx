import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

const anotherElement=(
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const anotheruser="chai aur react"

const reactElement= React.createElement(
  //accepted first parameter is tag type
  'a',
  // second parameter is props object
  {href:'http://google.com', target:'_blank'},
  // third parameter is children
  'Click me to visit Google',
  anotheruser
)

//console.log(reactElement)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement

)
