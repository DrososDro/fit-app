// function selectedDate() {
//   const newDate = new Date();
//   const year = newDate.getFullYear();
//   const month = newDate.getMonth();
//   const date = newDate.getDate();
//   const day = newDate.getDay();
//   return { year, month, date, day };
// }
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// const days = {
//   0: "sunday",
//   1: "monday",
//   2: "tuesday",
//   3: "wendseday",
//   4: "thursday",
//   5: "friday",
//   6: "saturday",
// };
function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function monthLengthCalc(month: number, year: number) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month < 1 || month > 12) {
    throw new Error("Invalid month:" + month);
  }

  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  const test = daysInMonth[month - 1];
  console.log("test", test);
  return test;
}

function calendarMonth(date: number, month: number, year: number): number[] {
  const monthLength = monthLengthCalc(month, year);
  const lastMonthDate = new Date(year, month - 1, monthLength).getDay();
  const fistMonthDate = new Date(year, month - 1, 1).getDay();
  console.log("fistmonthDate", fistMonthDate);
  console.log("lastMonthDate", lastMonthDate);
  const list = Array.from({ length: monthLength }, (_, i) => i + 1);
  return list;
}

export default function Calendar() {
  return (
    <div>
      <div className="mb-12 text-center text-2xl">26 November 2024</div>
      <div className="mx-auto mb-2 grid w-8/12 grid-cols-7">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span className="mb-10">S</span>
        {calendarMonth(2, 11, 2024).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <p>This is cal</p>
      {months.map((month, index) => {
        return (
          <div key={month}>
            {month}: {31 - ((index % 7) % 2)}
          </div>
        );
      })}
    </div>
  );
}
