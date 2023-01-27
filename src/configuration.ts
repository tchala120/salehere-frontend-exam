// Dayjs

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import dateTH from 'dayjs/locale/th'

dayjs.locale(dateTH)
dayjs.extend(relativeTime)
