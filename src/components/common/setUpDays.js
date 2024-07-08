import dayjs from "dayjs";
import isBetween from 'dayjs/plugin/isBetween'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(isBetween);
dayjs.extend(advancedFormat);

export default dayjs