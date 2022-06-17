import { GlobalStyles } from '@styles/globalStyles';
import { Header } from '@components/Header';
import { Wrapper } from '@styles/layout';
import { FormAddTask } from '@root/components/FormAddTask';
import { TaskList } from './components/TaskList';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <FormAddTask />
        <TaskList />
      </Wrapper>
    </>
  );
}

export default App;
