import { GlobalStyles } from '@styles/globalStyles';
import { Header } from '@components/Header';
import { Wrapper } from '@styles/layout';
import { FormAddTask } from '@root/components/FormAddTask';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <FormAddTask />
      </Wrapper>
    </>
  );
}

export default App;
