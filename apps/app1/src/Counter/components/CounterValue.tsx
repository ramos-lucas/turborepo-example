import { useAtomValue } from 'jotai';

import { useCounterProvider } from '../CounterProvider';

const CounterValue = () => {
  const { state } = useCounterProvider();
  const value = useAtomValue(state);

  return <h1>{value}</h1>;
};

export { CounterValue };
