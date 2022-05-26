import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

const tabs = [
  {
      tabName: 'tab 1',
      tabContent: 'Texto do primeiro tab'
  },
  {
      tabName: 'tab 2',
      tabContent: 'Texto do segundo tab'
  },
  {
      tabName: 'tab 3',
      tabContent: 'Texto do terceiro tab'
  },
  {
      tabName: 'tab 4',
      tabContent: 'Texto do quarto tab'
  }
]

function App() {
  return (
    <Tabs tabs={tabs}/>
  );
}

export default App;
