export const padInt = (num: number) => {
  if (num.toString().length === 1) return "0" + num.toString();
  else return num.toString();
};
