import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useMemo,
  useEffect
} from "react";

const StatisticModuleContext = createContext({});
const initialState = {
  stateA: "",
  stateB: false,
  tasks: [
    { label: "Task 1", isDone: false, type: "personal" },
    { label: "Task 2", isDone: false, type: "personal" },
    { label: "Task 3", isDone: false, type: "business" }
  ]
};
const TASK_UPDATED = "TASK_UPDATED";
const NEW_TASK_ADDED = "NEW_TASK_ADDED";
const STATE_B = "STATE_B";

function reducer(state, action) {
  const { type, tasks, stateB } = action;
  switch (type) {
    case TASK_UPDATED:
      return { ...state, tasks };
    case NEW_TASK_ADDED:
      return { ...state, tasks };
    case STATE_B:
      return { ...state, stateB };
    default:
      return initialState;
  }
}

function StatisticModule(props) {
  const [statisticModuleState, dispatch] = useReducer(reducer, initialState);
  const statisticModuleContextValue = {
    ...props,
    ...statisticModuleState,
    dispatch
  };

  return (
    <StatisticModuleContext.Provider value={statisticModuleContextValue}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-between"
        }}
      >
        {console.log(statisticModuleState)}
        <Totals />
        <NewTask />
        <TodoList />
      </div>
    </StatisticModuleContext.Provider>
  );
}

function Totals() {
  const statisticModuleContext = useContext(StatisticModuleContext);
  const { tasks, dispatch } = statisticModuleContext;

  function handleClick() {
    alert("clicked");
    dispatch({ type: STATE_B, stateB: true });
  }

  return (
    <div style={{ flexBasis: "30%", background: "#4CD7D0" }}>
      <h3 onClick={handleClick}>Total Tasks</h3>
      {tasks.filter(t => !t.isDone).length}
    </div>
  );
}

function NewTask() {
  const [task, setTask] = useState({});
  const statisticModuleContext = useContext(StatisticModuleContext);
  const { dispatch, tasks, setTasks } = statisticModuleContext;

  function handleSave() {
    const savedTasks = [
      ...tasks,
      { label: task, isDone: false, type: "study" }
    ];
    dispatch({
      type: NEW_TASK_ADDED,
      tasks: savedTasks
    });
    setTasks(savedTasks);
  }

  function handleInputChange(e) {
    setTask(e.target.value);
  }

  return (
    <div style={{ flexBasis: "30%", background: "#D43790", color: "white" }}>
      <h3>New task</h3>
      <input type="text" onChange={handleInputChange} />
      <input type="button" onClick={handleSave} value="Save" />
    </div>
  );
}

function TodoList() {
  const statisticModuleContext = useContext(StatisticModuleContext);
  const { dispatch, tasks, setTasks } = statisticModuleContext;
  const memoizedTasks = useMemo(() => {
    console.log(tasks);
    return tasks;
  }, [tasks]);
  useEffect(() => {
    console.log("rerender");
  }, [memoizedTasks]);

  function handleClick(task) {
    task.isDone = true;
    const updatedTasks = tasks.map(t => {
      if (t.label === task.label) t.isDone = true;
      return t;
    });
    dispatch({
      type: TASK_UPDATED,
      tasks: updatedTasks
    });
    setTasks(updatedTasks);
  }

  return (
    <div style={{ flexBasis: "30%", background: "tomato" }}>
      <h3>Tasks</h3>
      <ul>
        {memoizedTasks.map((t, idx) => (
          <li
            key={idx}
            style={{ textDecoration: t.isDone ? "line-through" : "none" }}
            onClick={() => handleClick(t)}
          >
            {t.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatisticModule;
