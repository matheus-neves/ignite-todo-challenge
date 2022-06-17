import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

interface TaskCounterProps {
  color?: 'blue' | 'purple';
}

const colors = {
  blue: 'var(--blue-300)',
  purple: 'var(--purple-300)',
};

export const TaskCounter = styled.strong<TaskCounterProps>`
  font-size: 0.875rem;
  color: ${({ color }) => (color ? colors[color] : colors['blue'])};
  line-height: 1.063rem;

  span {
    background: var(--gray-400);
    color: var(--gray-200);
    margin-left: 0.5rem;
    font-size: 0.75rem;

    padding: 0.125rem 0.5rem;
    border-radius: 10px;
  }
`;

export const NoTaskBoxFeedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--gray-400);
  gap: 1rem;
  padding: 4rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gray-300);
    img {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;
