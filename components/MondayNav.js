import Link from "next/link";
import WeekStatus from "./WeekStatus";
import { calcMonday } from "../functions/mondayFunctions";

export default ({ currentMonday, status, submitNewData }) => {
  const prevMon = `/diary?monday=${calcMonday(currentMonday, -7)}`;
  const nextMon = `/diary?monday=${calcMonday(currentMonday, 7)}`;

  const forwardData = data => {
    submitNewData(data);
  };

  return (
    <div>
      <nav>
        <Link href={prevMon}>
          <a>Prev</a>
        </Link>
        <h2>Week beginning {currentMonday.split("-").join(" ")} </h2>
        <Link href={nextMon}>
          <a>Next</a>
        </Link>
      </nav>
      <WeekStatus status={status} submitNewData={forwardData} />
      <style jsx>
        {`
          nav {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          h2 {
            margin-left: 20px;
            margin-right: 20px;
          }
          a {
            padding: 5px 10px;
            width: 65px;
            text-decoration: none;
            text-align: center;
            font-size: 1em;
            font-weight: 700;
            color: dodgerblue;
            background: white;
            cursor: pointer;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
            transition: background 0.3s ease;
          }
          a:hover {
            background: dodgerblue;
            color: white;
          }
          div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }
          @media print {
            a {
              display: none;
            }
            h2 {
              margin-right: 0;
              margin-left: 0;
              margin-bottom: 0.2rem;
            }
          }
        `}
      </style>
    </div>
  );
};
