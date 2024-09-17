"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";
const COMPLETED_TASKS_STORAGE_KEY = "COMPLETED_TASKS_STORAGE_KEY";

const storeTasks = (tasks: String[], completedTasks: String[]) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  localStorage.setItem(
    COMPLETED_TASKS_STORAGE_KEY,
    JSON.stringify(completedTasks)
  );
};

const readStoredTasks = () => {
  return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY)!) || [];
};

const readStoredCompletedTasks = () => {
  return JSON.parse(localStorage.getItem(COMPLETED_TASKS_STORAGE_KEY)!) || [];
};

export default function Options() {
  const [taskText, setTaskText] = useState("");

  const storedTasks = readStoredTasks();
  const storedCompletedTasks = readStoredCompletedTasks();

  const [tasks, setTasks] = useState<String[]>(storedTasks);
  const [completedTasks, setCompletedTasks] =
    useState<String[]>(storedCompletedTasks);

  useEffect(() => {
    storeTasks(tasks, completedTasks);
  });

  const updateTaskText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText.trim()]);
    }
  };

  const completeTask = (completedTask: String) => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((task) => task !== completedTask));
  };

  const deleteTask = (completedTask: String) => {
    setCompletedTasks(completedTasks.filter((task) => task !== completedTask));
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-slate-400">
        <h1>TASKS</h1>

        <div className="form border-gray-400">
          <input value={taskText} onChange={updateTaskText}></input>
          <Button onClick={addTask} color="primary">
            Add Task
          </Button>
        </div>

        <h1>TO DO TASKS</h1>
        <div className="container mx-auto p-6 bg-slate-400">
          {tasks.map((task, index) => {
            return (
              <div key={index} onClick={() => completeTask(task)}>
                {task}
              </div>
            );
          })}
        </div>

        <h1>COMPLETED TASKS</h1>
        <div className="container mx-auto p-6 bg-slate-400">
          {completedTasks.map((completedTask, index) => {
            return (
              <div key={index}>
                {completedTask}{" "}
                <span onClick={() => deleteTask(completedTask)}>x</span>
              </div>
            );
          })}
        </div>

        <Link
          className="p-2 rounded hover:bg-gray-700 transition-all duration-200"
          href="/"
          passHref
        >
          to HOME
        </Link>
      </div>
    </>
  );
}
