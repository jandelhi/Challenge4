import React from 'react';
import {render} from 'react-dom';
import PartyTheme from './PartyTheme';

const content = document.__DATA__;
render(<PartyTheme data={content.party}/>, document.getElementById("root-theme"))