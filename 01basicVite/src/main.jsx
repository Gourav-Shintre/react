import ReactDOM from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
const reactElement= {
  type : 'a',
  props: {
      href: "https://google.com",
      target:'_blank'
  },
  children: 'Click me to visit gogle'
}
function MyApp(){
  return(
    <>
    <h1>Custom Rect App</h1>

    </>
  )
}

const AnotherElement=(
  <a href="http://google.com" target='_blank'>Visit Google</a>
)


const areactElement = React.createElement(
  'a',
  {
    href:"http://google.com", target:'_blank'
  },
  "click tovisit google"
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // <MyApp />
    // AnotherElement
    areactElement
  
)
