let workDuration = 2;
  // let breakDuration = 2;
  // let seconds = 5;
  // let breakCount = 0;

  // let workMinutes = workDuration - 1; //25 = 24:59
  // let breakMinutes = breakDuration - 1; //5 = 4:59
  // let RemainingTime = () => {
  //   seconds = seconds - 1;
  //   if (seconds === 0) {
  //     workMinutes = workMinutes - 1;
  //     if (workMinutes < 0) {
  //       breakMinutes = workMinutes;
  //       if (breakMinutes < 0) {
  //         breakCount++;
  //         workMinutes = workDuration - 1;
  //         if (breakCount % 2 === 0) {
  //           breakDuration = 15;
  //         }
  //       }
  //       // if (breakCount % 2 === 0) {
  //       //   workMinutes = breakMinutes;
  //       //   breakCount++;
  //       // } else {
  //       //   workMinutes = workDuration - 1;
  //       //   breakCount++;
  //       // }
  //     }
  //     seconds = 6;
  //   }
  //   console.log("min", workMinutes);
  //   console.log("sec", seconds);
  //   console.log("breakCount", breakCount);
  //   console.log("breakmin", breakMinutes);
  // };
  // setInterval(RemainingTime, 1000);


  --- --- --- --- --- --- --- --- --- ---


25 min work timer
5 min break
repeat 4 times - long break after 4th one
15 min long break

25, 5, 25, 5, 25, 5, 25, 15

A function to count down from 25min.
- Have min and seconds
- when sec reach 0 take one off min
- set interval function to call function every second

let workTime = 25
let breakTime = 5
let longBreak = 15



