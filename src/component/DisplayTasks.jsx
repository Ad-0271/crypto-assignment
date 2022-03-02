import Typography from "@mui/material/Typography";
import { useEffect } from "react";

import { TaskCard } from "./TaskCard.jsx";

export const DisplayTasks = ({ getTasks, tasks }) => {
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div>
        <Typography variant="h5" sx={{ fontWeight: 700, color: "#003979" }}>
          Your Tasks
        </Typography>
      </div>
      <div>
        {tasks.map((el, i) => (
          <TaskCard
            title={el.title}
            key={el.id}
            status={el.status}
            getTasks={getTasks}
            id={el.id}
            n={i + 1}
          />
        ))}
      </div>
    </>
  );
};
