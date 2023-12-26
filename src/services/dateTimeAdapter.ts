import { DateTimeService } from '../application/ports';

export const dateTimeSource: DateTimeService = {
  currentDatetime() {
    return new Date().toISOString();
  },
};
