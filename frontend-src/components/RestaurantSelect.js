import React, { useState } from "react";
import Select from "react-select";
//import { Bar } from "react-chartjs-2";

const options = [
  { label: "last hour", value: "hour" },
  { label: "last day", value: "day" },
  { label: "last week", value: "week" },
  { label: "last month", value: "month" },
  { label: "last year", value: "year" }
];
const [itemss, setItemss] = React.useState([
  {
    label: "Luke Skywalker",
    value: "Luke Skywalker"
  },
  { label: "C-3PO", value: "C-3PO" },
  { label: "R2-D2", value: "R2-D2" }
]);

const defaultDate = options[0];
const defaultData = {};

export default function App() {
  const [count, setCount] = React.useState("Hotel1");
  const [date, setDate] = React.useState(defaultDate.value);
  const [chartData, setChartData] = useState(defaultData);

  const handleChange = (value) => {
    const date = value.value;
    setDate(value);
   
  };
  

  //React.useEffect(() => {
   
   //   setCount("Hotel8");
   
  //}, [date]);

  return (
    <div className="card-one">
      <span className="dropdown-select">
        <Select
          options={options}
          defaultValue={defaultDate}
          onChange={handleChange}
        />
      </span>
      
      
      <p>Value of date is {date.value} </p>
      <p>Value of Count is {count} </p>
    </div>
  );
}
