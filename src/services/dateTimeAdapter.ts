export const dateTimeSource = {
  currentDatetime(): DateTimeString {
    return new Date().toISOString();
  },
};
