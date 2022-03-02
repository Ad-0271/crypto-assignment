import "./TaskInput.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useState } from "react";

export const TaskInput = ({ getTasks }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    status: "Pending...",
  });

  const addTask = async () => {
    try {
      await fetch("http://localhost:3001/tasks", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      });

      getTasks();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Box className="task-input">
        <Typography variant="h5" className="heading" sx={{ fontWeight: 700 }}>
          Task Manager
        </Typography>
        <TextField
          label="Task Title"
          className="input"
          name="title"
          value={formData.title}
          sx={{ margin: "5px" }}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <TextField
          label="Task Description"
          className="input"
          multiline={true}
          rows={3}
          name="description"
          sx={{ margin: "5px" }}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <Input
          className="date-input"
          type="date"
          disableUnderline={true}
          name="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <Button variant="contained" onClick={addTask}>
          Create Task
        </Button>
      </Box>
    </>
  );
};
