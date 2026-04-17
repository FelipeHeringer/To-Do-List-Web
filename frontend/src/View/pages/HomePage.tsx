import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import TaskList from "../components/layout/TaskList";
import TaskForm from "../components/layout/TasksForm";
import { useTasks } from "../../ViewModel/hooks/useTasks";

export function HomePage() {
    const { tasks, addTask, deleteTask, toggleTask, remaining, quote } = useTasks();

    return (
        <div className="w-full max-w-110 px-9 py-10 bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] rounded-[20px]">
            <Header />
            <TaskForm onAddTask={addTask}/>  
            <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} /> 
            <Footer remaining={remaining} quote={quote}/>
        </div>
    )
}
