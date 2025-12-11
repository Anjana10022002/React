import React, {useState} from "react";

function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState("Add a task to ge strated!");
    const [bgColor, setBgColor] = useState("white");
    const handleAddTask = () => {
        if (task.trim() === "") return;

        setTasks([...tasks, task]);
        setMessage("Task added: ${task}!");
        setTask("");
        setBgColor("lightblue");
};

return (
    <div className="container d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: bgColor }}>

        

    </div>



