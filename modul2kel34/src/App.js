import React from 'react';
import './App.css';
import ReactJSX, {ReactNoJSX} from './components/ReactJSX';
import CompAndProps from './components/CompAndProps';
function App() {
 return (
 <div className="App">
 <header className="App-header">
 <ReactJSX />
 <ReactNoJSX />
 <div className="Components">
 <CompAndProps bgColor="#66ccff"/>
 </div>

 </header>
 </div>
 );
}
export default App;