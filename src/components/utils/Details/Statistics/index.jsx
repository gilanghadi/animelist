/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "../../../CardCharacter/Header";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { ArcElement, DoughnutController } from "chart.js";
Chart.register(ArcElement, DoughnutController);

const Statistics = ({ api }) => {
  const data = {
    labels: api?.scores?.map((item) => item?.score),
    datasets: [
      {
        label: "votes",
        data: api?.scores?.map((item) => item?.votes),
        backgroundColor: [
          "#4c8f75",
          "#9ea65b",
          "#796331",
          "#318c5a",
          "#480002",
          "#0ba684",
          "#67fca8",
          "#74b501",
          "#4c0add",
          "#4c3f7b",
        ],
        hoverOffset: 4,
      },
      {
        label: "persentase",
        data: api?.scores?.map((item) => item?.percentage),
        backgroundColor: [
          "#4c8f75",
          "#9ea65b",
          "#796331",
          "#318c5a",
          "#480002",
          "#0ba684",
          "#67fca8",
          "#74b501",
          "#4c0add",
          "#4c3f7b",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-5 mt-4">
      <div>
        <span className="flex">
          <Header title={"Summary Stats"} linkHref={""} linkTitle={""} />
          <span className="text-secondary">*</span>
        </span>
        <ul className="list-disc text-softLight ml-5">
          <li>Watching: {api?.watching}</li>
          <li>Completed: {api?.completed}</li>
          <li>On-Hold: {api?.on_hold}</li>
          <li>Dropped: {api?.dropped}</li>
          <li>Plan to Watch: {api?.plan_to_watch}</li>
          <li>Total: {api?.total}</li>
        </ul>
      </div>
      <div>
        <span className="flex">
          <Header title={"Score Stats"} linkHref={""} linkTitle={""} />
          <span className="text-secondary">*</span>
        </span>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default Statistics;
