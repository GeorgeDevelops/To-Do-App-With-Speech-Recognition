import './styles/styles.css';
import React, { useState } from 'react';
import Mic from './components/mic';
import Item from './components/item';
import HowToUse from './components/howToUse';

function App() {
  let array = [];
  const [items, setItems] = useState(array);

  function handleCheck(e) {
    let c = e.target.parentNode.parentNode;
    return c.style.textDecoration = 'line-through #E74C3C';
  }

  function handleRemove(e) {
    let c = e.target.parentNode.parentNode.parentNode.id;
    let newList = items.filter(i => Number(i.id) !== Number(c));
    return setItems(newList);
  }

  return (
    <React.Fragment>
      <div id='title'>
        <h2>Speech recognition</h2>
        <h3>To-Do App</h3>
      </div>
      <div id="App">

        <ul id='tasks_wrapper'>
          {
            items.map(i => <Item
              key={i.id}
              id={i.id}
              taskName={i.name}
              check={handleCheck}
              remove={handleRemove} />)
          }
          <li className='item'></li>
          <li className='item'></li>
          <li className='item'></li>
          <li className='item'></li>
          <li className='item'></li>
          <li className='item'></li>
          <li className='item'></li>
        </ul>

        <Mic add={setItems} prev={items} />
      </div>
      <HowToUse />
    </React.Fragment>
  );
}

export default App;


