import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Action from './Action'
import Options from './Options'
import AddOptions from './AddOptions'


function App() {
  const title = 'Indecision';
  const subtitle = 'Making hard decisions a little bit easier';
  const [options, setOptions] = useState([])
  
  

  const handleDeleteOptions = () => {
    setOptions([])
  };

  const handlePick = () => {
    const randomIndex = Math.floor(Math.random() * options.length)
    const decision = options[randomIndex];
    alert(decision);
  }

  const handleAddOptionMain = (option) => {
    if (options.indexOf(option) > -1) {
      return console.log('This Option already exists.')
    }
    setOptions(options.concat(option))
  }

  return (
    <div className="app">
      <div className="header">
        <Header
          title={title}
          subtitle={subtitle}
        />
      </div>
      <div className="actions">
        <Action
          hasOptions={options.length > 0}
          handlePick={handlePick}
        />
      </div>
      <div>
        <Options
          options={options}
          handleDeleteOptions={handleDeleteOptions}
        />
      </div>
      <div className="addOptions">
        <AddOptions
        handleAddOptionMain={handleAddOptionMain}
        />
      </div>

    </div>
  )
}

export default App;
