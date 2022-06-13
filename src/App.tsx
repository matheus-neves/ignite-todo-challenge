import { GlobalStyles } from '@styles/globalStyles';
import { Header } from '@components/Header';
import { Wrapper } from '@styles/layout';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <h1>Tasks</h1>
      </Wrapper>
    </>
  );
}

export default App;
