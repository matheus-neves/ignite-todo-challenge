import { Container, TaskCounter, EmptyTaskBox } from './styles';
import ClipboardIcon from '@assets/clipboard.svg';
import { Task, TaskProps } from '@components/Task';
import { useCallback, useMemo, useState } from 'react';
import { FormAddTask } from '../FormAddTask';

export function TaskList() {
  const [tasks, setTasks] = useState<Omit<TaskProps, 'onDeleteTask' | 'onCheckTask'>[]>([]);

  const handleAddTask = useCallback(
    (value: string) => {
      console.log(value);

      setTasks([
        ...tasks,
        {
          id: new Date().getTime(),
          status: false,
          description: value,
        },
      ]);
    },
    [tasks],
  );

  const handleDeleteTask = useCallback(
    (taskId: number) => {
      const filteredTasks = tasks.filter((task) => task.id !== taskId);

      setTasks(filteredTasks);
    },
    [tasks],
  );

  const handleCheckTask = useCallback(
    (taskId: number) => {
      const mappedTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: !task.status,
          };
        }
        return task;
      });

      setTasks(mappedTasks);
    },
    [tasks],
  );

  const counterTasksDone = useMemo(() => {
    return tasks.reduce((acc, value) => {
      if (value.status) {
        return (acc += 1);
      }
      return acc;
    }, 0);
  }, [tasks]);

  return (
    <Container>
      <FormAddTask onAddTask={handleAddTask} />
      <header>
        <TaskCounter>
          Tarefas criadas <span>{tasks.length}</span>
        </TaskCounter>
        <TaskCounter color='purple'>
          Concluídas{' '}
          <span>
            {counterTasksDone} de {tasks.length}
          </span>
        </TaskCounter>
      </header>

      {!tasks?.length && (
        <EmptyTaskBox>
          <img src={ClipboardIcon} alt='Ícone de prancheta' />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </EmptyTaskBox>
      )}

      <ul>
        {tasks?.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            status={task.status}
            description={task.description}
            onDeleteTask={() => handleDeleteTask(task.id)}
            onCheckTask={() => handleCheckTask(task.id)}
          />
        ))}
      </ul>
    </Container>
  );
}
