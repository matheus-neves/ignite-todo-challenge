import { FormContainer } from './styles';
import { PlusCircle } from 'phosphor-react';

export function FormAddTask() {
  return (
    <FormContainer>
      <input placeholder='Adicione uma nova tarefa' />
      <button type='submit'>
        Criar
        <PlusCircle size={20} />
      </button>
    </FormContainer>
  );
}
