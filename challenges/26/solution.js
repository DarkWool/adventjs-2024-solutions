/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
  const timeWorkedArr = timeWorked.split(":");
  const totalTimeArr = totalTime.split(":");

  const timeWorkedSecs =
    timeWorkedArr[0] * 60 * 60 + timeWorkedArr[1] * 60 + +timeWorkedArr[2];
  const totalTimeSecs =
    totalTimeArr[0] * 60 * 60 + totalTimeArr[1] * 60 + +totalTimeArr[2];

  return `${Math.round((timeWorkedSecs / totalTimeSecs) * 100)}%`;
}

// getCompleted("01:00:00", "03:00:00"); // 33%
// getCompleted('02:00:00', '04:00:00') // 50%
// getCompleted('01:00:00', '01:00:00') // 100%
// getCompleted('00:10:00', '01:00:00') // 17%
getCompleted("01:10:10", "03:30:30"); // 33%
getCompleted("03:30:30", "05:50:50"); // 60%
getCompleted("23:59:59", "24:00:00");
