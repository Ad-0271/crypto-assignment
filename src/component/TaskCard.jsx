import "./TaskCard.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

export const TaskCard = ({ title, id, getTasks, n }) => {
  const [btnTxt, setBtnTxt] = useState("Pending...");

  const updateTask = async () => {
    try {
      fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: btnTxt }),
        headers: {
          "Content-type": "application/json",
        },
      });

      getTasks();
    } catch (err) {
      alert(err);
    }
  };

  const deletTask = async () => {
    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
      });

      getTasks();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Box className="taskCard">
        <Box>
          <Typography>
            {n}. {title}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ marginRight: "10px" }}
            onClick={() => {
              setBtnTxt(btnTxt === "Pending..." ? "Completed" : "Pending...");
              updateTask();
            }}
          >
            {btnTxt}
          </Button>
          <Button
            variant="contained"
            sx={{ marginRight: "10px" }}
            onClick={deletTask}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
};
