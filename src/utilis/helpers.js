export const formatTime = function (minutes, seconds) {
  const minutesString = `${minutes}`.length === 1 ? `0${minutes}` : minutes;
  const secondsString = `${seconds}`.length === 1 ? `0${seconds}` : seconds;
  return `${minutesString}:${secondsString}`;
};
