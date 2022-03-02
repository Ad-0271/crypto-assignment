import "./App.css";

import Box from "@mui/material/Box";

import { TaskInput } from "./component/TaskInput";
import { DisplayTasks } from "./component/DisplayTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await fetch("http://localhost:3001/tasks");

      const data = await res.json();

      setTasks(data);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="App">
      <Box className="top-container">
        <TaskInput getTasks={getTasks} />
        <DisplayTasks getTasks={getTasks} tasks={tasks} />
      </Box>
    </div>
  );
}

export default App;
