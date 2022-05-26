import { Main } from './components/Main/Main';
import { TodoProvider } from './context';

const App = () => {
  return (
    <TodoProvider>
      <Main />
    </TodoProvider>
  );
};

export default App;
