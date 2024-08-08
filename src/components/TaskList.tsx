import React, { useEffect } from "react";
import { TaskItem } from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchTasks } from "../redux/taskSlice";

export const TaskList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading, error } = useSelector(
    (state: RootState) => state.tasks
  );

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }
  if (tasks) {
    return (
      <>
        {tasks.map((task, id) => (
          <TaskItem key={id} task={task} />
        ))}
      </>
    );
  }
};
