//react-dom is a library & ReactDOM is an object which is imported in this file.
import ReactDOM from 'react-dom';  

import './index.css'; //always use .css while importing css files
import App from './App'; //don't use .js while importing js files. (./) : in same folder. 

//obj.functioncallingmethod(); => ReactDOM is an object which calls render method. 
//root is an id of a div. This statement displays something(first argument: app component) in place
//of that div(identified by that id).
ReactDOM.render(<App />, document.getElementById('root')); 
