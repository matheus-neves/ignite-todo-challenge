import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --gray-100: #f2f2f2;
    --gray-200: #d9d9d9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1a1a1a;
    --gray-700: #0d0d0d;

    --blue-300: #4ea8de;
    --blue-500: #1e6f9f;

    --purple-300: #8284fa;
    --purple-500: #5e60ce;

    --red: #e25858;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-600);
    color: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;
