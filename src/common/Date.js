/**
 * @param date [Date]
 * @param format [string: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow']
 */
export function getMonth(
  date,
  format = 'numeric' | '2-digit' | 'long' | 'short' | 'narrow',
) {
  return new Intl.DateTimeFormat('en', {month: format}).format(date);
}

/**
 * @param date [Date]
 * @param format [string: "numeric" | "2-digit"]
 */
export function getYear(date, format = 'numeric' | '2-digit') {
  return new Intl.DateTimeFormat('en', {year: format}).format(date);
}

/**
 * @param date [Date]
 */
export function getDay(date) {
  return new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);
}

/**
 * @param format [string: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow']
 */
export function getThisMonth(
  format = 'numeric' | '2-digit' | 'long' | 'short' | 'narrow',
) {
  return new Intl.DateTimeFormat('en', {month: format}).format(new Date());
}

export function getThisDay() {
  return new Intl.DateTimeFormat('en', {day: '2-digit'}).format(new Date());
}

/**
 * @param format [string: "numeric" | "2-digit"]
 */
export function getThisYear(format = 'numeric' | '2-digit') {
  return new Intl.DateTimeFormat('en', {year: format}).format(new Date());
}

/**
 * Get next months from the current month
 */
export function getNextMonths() {
  const today = new Date();
  let thisMonth = new Intl.DateTimeFormat('en', {month: 'numeric'}).format(
    today,
  );
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let nextMonths = [];
  for (let i = thisMonth - 1; i < 12; i++) {
    nextMonths.push(months[i]);
  }
  for (let i = 0; i < thisMonth - 1; i++) {
    nextMonths.push(months[i]);
  }
  return nextMonths;
}
