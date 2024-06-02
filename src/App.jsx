import { useState } from 'react';
import './App.css';
import Header from './Header';


const App = () => {
  const [count, setCount] = useState(0);
  const showAlert = () => {
    alert('Button clicked!');
  };

  const welcome = <h1>Well come</h1>
  
  return (
    <>
      <div>
        {welcome}
        <h1>Hello Chutintorn</h1>
        <button onClick={showAlert}>Click me</button>
      </div>
      <Header/>
    </>
  );
};

export default App;
