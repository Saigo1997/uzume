import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/reset.scss';
import './App.scss';

import {LeftMenu} from './Organisms/LeftMenu/LeftMenu';
import {CenterListMenu} from './Organisms/CenterListMenu/CenterListMenu';

import {RightMenu} from './Organisms/RightMenu/RightMenu';
import {SplitBar} from './Atoms/SplitBar/SplitBar';


export function App() {
  return (
    <div className="container"> 
      <LeftMenu />
      <SplitBar Id="before-main" />
      <CenterListMenu />
      <SplitBar Id="after-main" />
      <RightMenu />
    </div>
  );
}

export default App;
