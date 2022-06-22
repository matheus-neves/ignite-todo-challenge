import { FormContainer } from './styles';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';

interface FormAddTaskProps {
  onAddTask: (value: string) => void;
}

export function FormAddTask({ onAddTask }: FormAddTaskProps) {
  const [value, setValue] = useState('');

  const handleAddTask = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!value) return;

    onAddTask(value);
    setValue('');
  };

  return (
    <FormContainer>
      <input
        placeholder='Add a new task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' onClick={handleAddTask}>
        Create
        <PlusCircle size={20} />
      </button>
    </FormContainer>
  );
}
