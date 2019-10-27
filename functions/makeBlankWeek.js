/* called when a user navigates to a date in the db that is currently empty
// i.e. no-one has visited it before
// it creates an empty week object which can then be written to the db
*/

const makeBlankWeek = () => {
  return {
    status: "normal",
    diary: [
      {
        day: "Monday",
        status: "normal",
        content: ""
      },
      {
        day: "Tuesday",
        status: "normal",
        content: ""
      },
      {
        day: "Wednesday",
        status: "normal",
        content: ""
      },
      {
        day: "Thursday",
        status: "normal",
        content: ""
      },
      {
        day: "Friday",
        status: "normal",
        content: ""
      }
    ]
  };
};

export { makeBlankWeek };
