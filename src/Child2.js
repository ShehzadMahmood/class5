import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';
import counterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer, 1);

    console.log(state)
    return (
        <div>
             <h2>This is second Child using CounterReducer</h2>
            <h3>Value of reducer state is: {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default Child2;