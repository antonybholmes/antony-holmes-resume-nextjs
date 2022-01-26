import { parseISO, format } from 'date-fns'

interface IProps {
  dateString: string
}

const DateFormatter = ({ dateString }: IProps) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLL	d, yyyy')}</time>
}

export default DateFormatter
