import { type FilterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  handleFilterChange: (filter: FilterValue) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
  filterSelected: FilterValue;
}

export const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  onClearCompleted,
  filterSelected,
  handleFilterChange,
}) => {
  const singleActiveCount = activeCount === 1;
  const activeTodoWord = singleActiveCount ? "tarea" : "tareas";

  return (
    <footer className="py-6 px-4 text-center text-base border-t-2 border-[#e6e6e6] flex justify-between items-center">
      <span className="todo-count">
        <strong>{activeCount}</strong> {activeTodoWord} pendiente
        {!singleActiveCount && "s"}
      </span>

      <Filters
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar completados
        </button>
      )}
    </footer>
  );
};
