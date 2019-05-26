import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import useMouse from 'react-use/lib/useMouse';
import {
  App, Button, Title, Image
} from '../../style/home';
import useClientRect from '../../hooks/useClientRect';
import { incrementCounter, decrementCounter, resetCounterLaunched } from './actions';
import Counter from '../../components/Counter';
import logo from '../../assets/images/logo.png';

const HomePage = () => {
  const appRef = React.useRef(null);
  const { docX, docY } = useMouse(appRef);
  const dispatch = useDispatch();
  const { counter, resetLoading } = useSelector(state => ({
    counter: state.get('Home').get('counter'),
    resetLoading: state.get('Home').get('resetLoading')
  }), shallowEqual);
  const [rect, ref] = useClientRect();
  const center = getCoordinates(rect !== null ? rect : {});

  const increment = () => {
    dispatch(incrementCounter(counter));
  };

  const decrement = () => {
    dispatch(decrementCounter(counter));
  };

  const calculateAngle = () => {
    const opp = docY - center.y;
    const adj = docX - center.x;
    return (Math.atan(opp / adj) * 180) / Math.PI;
  };

  console.log(resetLoading);
  return (
    <App ref={appRef}>
      <Image src={logo} ref={ref} angle={calculateAngle()} />
      <Title>React Redux Starter</Title>
      <Button type="button" onClick={increment}>+</Button>
      <Button type="button" onClick={decrement}>-</Button>
      <Counter counter={counter} />
      <Button loading={resetLoading} type="button" onClick={() => { dispatch(resetCounterLaunched()); }}>Reset</Button>
    </App>
  );
};

const getCoordinates = (rect) => {
  const {
    x, y, width, height
  } = rect;
  return { x: x + width / 2, y: y + height / 2 };
};

export default HomePage;
