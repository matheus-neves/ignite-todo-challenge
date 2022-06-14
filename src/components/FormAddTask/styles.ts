import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: -1.688rem; // 27px

  input {
    flex: 1;
    height: 3.375rem; //54px
    padding: 1rem;
    background: var(--gray-500);
    border-radius: 8px;
    border: 1px solid var(--gray-700);
    color: var(--gray-100);
    outline: none;

    ::placeholder {
      color: var(--gray-300);
    }

    &:focus {
      border: 1px solid var(--purple-500);
    }
  }

  button {
    padding: 1rem;
    background: var(--blue-500);
    color: var(--gray-100);
    border-radius: 8px;
    border: none;

    font-weight: 700;
    font-size: 0.875rem;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    &:hover {
      background: var(--blue-300);
      cursor: pointer;
    }
  }
`;
