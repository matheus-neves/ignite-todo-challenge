import { Container, TaskCounter, NoTaskBoxFeedback } from './styles';
import ClipboardIcon from '@assets/clipboard.svg';

export function TaskList() {
  return (
    <Container>
      <header>
        <TaskCounter>
          Tarefas criadas <span>0</span>
        </TaskCounter>
        <TaskCounter color='purple'>
          Concluídas <span>2 de 5</span>
        </TaskCounter>
      </header>

      <NoTaskBoxFeedback>
        <img src={ClipboardIcon} alt='Ícone de prancheta' />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </NoTaskBoxFeedback>
    </Container>
  );
}
