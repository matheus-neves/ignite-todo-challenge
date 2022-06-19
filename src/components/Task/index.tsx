import { TaskContainer } from './styles';
import { DeleteIcon } from '@components/Icons/DeleteIcon';

interface TaskProps {
  id: number;
  description: string;
  onDeleteTask: (taskId: number) => void;
}

export function Task({ id, description, onDeleteTask }: TaskProps) {
  return (
    <TaskContainer>
      <label>
        <input type='checkbox' />
        <span>{description}</span>
      </label>
      <button type='button' onClick={() => onDeleteTask(id)}>
        <DeleteIcon />
      </button>
    </TaskContainer>
  );
}
