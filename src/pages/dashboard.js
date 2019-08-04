import React, { useState, Suspense } from "react";
// import StatisticModule from "../modules/statisticModule";
// import ListingModule from "../modules/listingModule";
import { useCounter } from "../index";

const ListingModule = React.lazy(() => import("../modules/listingModule"));
const StatisticModule = React.lazy(() => import("../modules/statisticModule"));

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const { count } = useCounter();

  return (
    <div style={{ width: "90vw", height: 200 }}>
      {count}

      <Suspense fallback={<div>Loading...</div>}>
        <StatisticModule setTasks={setTasks} />
        <ListingModule tasks={tasks} />
      </Suspense>
    </div>
  );
}

export default Dashboard;
