import { Todos } from "./components/Todos";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Copyright } from "./components/Copyright";
import { useTodos } from "./hooks/useTodos";

function App() {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos: filteredTodos,
  } = useTodos();

  return (
    <>
      <h1 className="text-center text-cyan-500 text-xl md:text-3xl font-bold absolute top-20 left-1/2 -translate-x-1/2">☯️ Todo List</h1>
      <div className="todoapp">
        <Header saveTodo={handleSave} />
        <Todos
          removeTodo={handleRemove}
          setCompleted={handleCompleted}
          setTitle={handleUpdateTitle}
          todos={filteredTodos}
        />
        <Footer
          handleFilterChange={handleFilterChange}
          completedCount={completedCount}
          activeCount={activeCount}
          filterSelected={filterSelected}
          onClearCompleted={handleClearCompleted}
        />
      </div>
      <Copyright/>
    </>
  );
}

export default App;
