// returns the current monday in the format dd-www-yyyy
// this format is used for urls/routing/db keys

export function calcCurrentMonday() {
  // find the current monday, as a raw js date
  const m = new Date();
  m.setDate(m.getDate() - ((m.getDay() + 6) % 7));

  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  // parses current monday date object
  // as e.g. "24-June-2019"
  function parseMonday(d) {
    const dateString = d.toLocaleDateString("en-GB", dateOptions);
    return dateString.split(" ").join("-");
  }
  return parseMonday(m);
}

// finds the next or previous monday given this monday, and -7 or +7
// (in the form dd-mmm-yyyy)
export function calcMonday(thisMonday, inc) {
  // options for the locale string in format monday function
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  // helper function for get date as dd-mmm-yyyy
  function formatMonday(d) {
    const dateString = d.toLocaleDateString("en-GB", dateOptions);
    return dateString.split(" ").join("-");
  }
  const parsedMonday = thisMonday.split("-").join(" ");
  const d = new Date(parsedMonday);
  d.setDate(d.getDate() + inc);
  return formatMonday(d);
}
