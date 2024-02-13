export const formatTime = function (minutes, seconds) {
  const minutesString = `${minutes}`.length === 1 ? `0${minutes}` : minutes;
  const secondsString = `${seconds}`.length === 1 ? `0${seconds}` : seconds;
  return `${minutesString}:${secondsString}`;
};

export const generateId = function () {
  return Math.round(Math.random() * 10000000);
};

export const setRegister = function (obj) {
  obj["innerRef"] = obj["ref"];
  delete obj["ref"];
  return obj;
};
