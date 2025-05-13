import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
function MyApp() {
  return (
    <div>
      <h1>Custom app | Harsh Jain</h1>
    </div>
  );
}


// const ReactElement = {
//     type: 'a',
//     props :{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children : 'click me to visit element'
// }
const anotherusername = "username2"
 const ReactElement = React.createElement(
    'a',
    {href: 'google.com', target : '_blank'},
    'click me to visit google with react element',
    'p',
    anotherusername
 )
const AnotherElement = (
  <a href="googl.com" target="_blank">Vist Google</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
  //<App/>
  //<MyApp/>
  //MyApp()
 // <ReactElement/> //not a funtion to exceute
  ReactElement
 // AnotherElement
);
