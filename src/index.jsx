import React from 'react';
import ReactDOM from 'react-dom';
import Macros from './components/Macros';

const macros = [
    'protein',
    'fats',
    'carbs'
];

ReactDOM.render(
    <Macros macros={macros} />,
    document.getElementById('app')
);