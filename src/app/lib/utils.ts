export const getUserMessage = () => {
  var data = [
      [22, "It's bed time, Get some sleep. <span >&#128529;</span>"],
      [16, "Good evening <span>&#127769;</span>, Stay safe! <span>&#128153;</span>"],
      [12, "Good afternoon, Wash your hands.<span>&#128080;</span>"],
      [5, "Good morning <span>&#127774;</span>, Great day! "],
      [0, "Working late? Try rest! <span>&#128580;</span>"],
    ],
    hr = new Date().getHours();
  for (var i = 0; i < data.length; i++) {
    const time = data[i][0] as number;
    if (hr >= time) {
      return `${data[i][1]}`;
    }
  }
};

export const getErrorMessage = (message: string) => {
  switch (message) {
    case "Internal server error":
      return "Something went wrong. Please try again!";
    default:
      return message;
  }
};

export const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
