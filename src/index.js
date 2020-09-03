import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import { GoalLogProvider } from './Context/GoalsLogContext';
import { GoalProvider } from './Context/GoalsContext';

ReactDOM.render(
    <BrowserRouter>
        <GoalLogProvider>
            <GoalProvider>
                <App />
            </GoalProvider>
        </GoalLogProvider>
    </BrowserRouter>,
    document.getElementById('root'));