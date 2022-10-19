import { useCounterProvider } from '@/Counter/CounterProvider';
import { usePermissionsProvider } from '@/Counter/PermissionsProvider';

const CounterActions = () => {
  const { increment, decrement, incrementBy10, decrementBy10, reset } =
    useCounterProvider();
  const { shouldEnableReset } = usePermissionsProvider();

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <button type="button" onClick={decrementBy10}>
        - 10
      </button>
      <button type="button" onClick={decrement}>
        -1
      </button>
      <button type="button" onClick={reset} disabled={!shouldEnableReset()}>
        Reset
      </button>
      <button type="button" onClick={increment}>
        + 1
      </button>
      <button type="button" onClick={incrementBy10}>
        + 10
      </button>
    </div>
  );
};

export { CounterActions };
