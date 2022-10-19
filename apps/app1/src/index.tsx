import { Counter } from '@/Counter';
import { CounterProvider } from '@/Counter/CounterProvider';
import { PermissionsProvider } from '@/Counter/PermissionsProvider';
import './index.css';

function App() {
  return (
    <CounterProvider>
      <PermissionsProvider>
        <Counter />
      </PermissionsProvider>
    </CounterProvider>
  );
}

export { App };
