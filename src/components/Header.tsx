import { CreateTodo } from './CreateTodo'

interface Props {
  saveTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
  return (
    <header>
      <CreateTodo saveTodo={saveTodo} />
    </header>
  )
}