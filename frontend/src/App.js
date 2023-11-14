import './App.css';
import { Fragment } from 'react';

//Importing Components
import Input from './components/Input';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Input />
        <List />
      </Fragment>
    </div>
  );
}

export default App;
