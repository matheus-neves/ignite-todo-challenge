import { TaskContainer } from './styles';
import { DeleteIcon } from '@components/Icons/DeleteIcon';

export interface TaskProps {
  id: number;
  description: string;
  status: boolean;
  onCheckTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function Task({ id, description, status, onDeleteTask, onCheckTask }: TaskProps) {
  return (
    <TaskContainer>
      <label>
        <input type='checkbox' checked={status} onChange={() => onCheckTask(id)} />
        <span>{description}</span>
      </label>
      <button type='button' onClick={() => onDeleteTask(id)}>
        <DeleteIcon />
      </button>
    </TaskContainer>
  );
}
