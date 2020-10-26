const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export const required = (value) => {
  if (value) return undefined;
  return "Filed is required";
};
export const validateEmail = (value) =>
  value && !emailPattern.test(value) ? "Invalid email address" : undefined;
