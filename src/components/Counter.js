import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter-slice';

import classes from './Counter.module.css';

const Counter = () => {
  const { counter, show } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const increase = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <div className={classes.value}>{counter}</div>
          <div className={classes.actions}>
            <button onClick={decrementHandler}>-</button>
            <button onClick={resetHandler}>R</button>
            <button onClick={increase}>+5</button>
            <button onClick={incrementHandler}>+</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
