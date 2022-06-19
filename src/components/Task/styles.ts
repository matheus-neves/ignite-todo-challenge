import styled from 'styled-components';
import CheckIcon from '@assets/check.svg';

export const TaskContainer = styled.li`
  display: flex;
  align-items: flex-start;
  align-content: space-between;
  background: var(--gray-500);
  border: 1px solid var(--gray-400);
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.875rem;

  & + li {
    margin-top: 0.75rem;
  }

  label {
    position: relative;
    display: flex;
    align-items: flex-start;
    cursor: pointer;

    span {
      margin-left: 1rem;
    }
  }

  input {
    appearance: none;
    display: grid;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    margin-top: 0.2rem;
    border-radius: 50%;

    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      background: transparent;
      border: 2px solid var(--blue-300);
      border-radius: 50%;
    }

    &:hover {
      &::before {
        opacity: 0.8;
      }
    }

    &:checked {
      &::before {
        background: var(--purple-500) url(${CheckIcon}) center no-repeat;
        background-size: 60%;
        border: 2px solid var(--purple-500);
      }

      &:hover {
        &::before {
          background: var(--purple-300) url(${CheckIcon}) center no-repeat;
          background-size: 60%;
          border: 2px solid var(--purple-300);
        }
      }

      & ~ span {
        text-decoration: line-through;
        color: var(--gray-300);
      }
    }
  }

  button[type='button'] {
    background: none;
    border: none;
    margin-left: 1rem;
    padding: 0.313rem 0.375rem; //5px 6px
    border-radius: 4px;
    line-height: 0;
    cursor: pointer;

    svg {
      width: 13px;
      height: 14px;
      fill: red;
    }

    &:hover {
      background: var(--gray-400);
      svg path {
        fill: var(--red);
      }
    }
  }
`;
