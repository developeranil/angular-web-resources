import * as dayjs from 'dayjs';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import * as isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import * as isBetween from 'dayjs/plugin/isBetween';
import * as isoWeek from 'dayjs/plugin/isoWeek';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);
dayjs.extend(isoWeek);
dayjs.extend(customParseFormat);

export const dayjsRef = dayjs;