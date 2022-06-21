import { GlobalStyles } from '@styles/globalStyles';
import { Header } from '@components/Header';
import { Wrapper } from '@styles/layout';
import { TaskList } from './components/TaskList';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <TaskList />
      </Wrapper>
    </>
  );
}

export default App;
