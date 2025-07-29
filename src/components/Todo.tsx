import { type Todo as TodoType } from "../types";
import { useState, useEffect, useRef } from "react";

type ActionTypes = {
  setCompleted: (id: string, completed: boolean) => void;
  setTitle: (params: { id: string; title: string }) => void;
  isEditing: string;
  setIsEditing: (completed: string) => void;
  removeTodo: (id: string) => void;
};

type Props = TodoType & ActionTypes;

export const Todo: React.FC<Props> = ({ id, title, completed, setCompleted, removeTodo, setTitle, setIsEditing, isEditing }) => {
    const [editedTitle, setEditedTitle] = useState(title)
  const inputEditTitle = useRef<HTMLInputElement>(null)

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      setEditedTitle(editedTitle.trim())

      if (editedTitle !== title) {
        setTitle({ id, title: editedTitle })
      }

      if (editedTitle === '') removeTodo(id)

      setIsEditing('')
    }

    if (e.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing('')
    }
  }

  useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  return (
    <>
      <div className='view'>
        <input
          className='toggle cursor-pointer'
          checked={completed}
          type='checkbox'
          onChange={(e) => { setCompleted(id, e.target.checked) }}
        />
        <label>{title}</label>
        <button className='destroy cursor-pointer' onClick={() => { removeTodo(id) }}></button>
      </div>

      <input
        className='edit'
        value={editedTitle}
        onChange={(e) => { setEditedTitle(e.target.value) }}
        onKeyDown={handleKeyDown}
        onBlur={() => { setIsEditing('') }}
        ref={inputEditTitle}
      />
    </>
  );
};
