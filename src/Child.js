import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return (
        <div>
            <h2>This is first Child using CounterContext</h2>
            <h4>counter value is: {counterValue[0]}</h4>

            <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                Increament Context
            </button>
        </div>
    )

}

export default Child;