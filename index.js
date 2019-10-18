const formatDate = (timeInSeconds) => {
  let formatedTime = `${timeInSeconds % 60}s`;

  if (!timeInSeconds) {
    return `0s`;
  }

  if (timeInSeconds % 3600 == 0) {
    return `${Math.floor(timeInSeconds / 3600)}h`;
  }

  if (timeInSeconds > 60 && Math.floor((timeInSeconds % 3600) / 60) != 0) {
    formatedTime =
      `${Math.floor((timeInSeconds % 3600) / 60)}m ` + formatedTime;
  }

  if (timeInSeconds % 60 == 0) {
    formatedTime = `${Math.floor((timeInSeconds % 3600) / 60)}m`;
  }

  if (timeInSeconds > 3600) {
    return `${Math.floor(timeInSeconds / 3600)}h ` + formatedTime;
  }

  return formatedTime;
};

module.exports = formatDate;