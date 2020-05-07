export function getDayName(date)
{
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];

      return date.getDay() - new Date().getDay() == 1 ? "Tomorrow" : days[date.getDay()];
}

function getMonthName(date)
{
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
        'December'
      ];
      return months[date.getMonth()];
}

export function getFormattedDate(date, dayName)
{    
      const dayOfWeek = dayName ? dayName: getDayName(date);
      const monthName = getMonthName(date);
      const day = date.getDate();

      return `${dayOfWeek}, ${monthName} ${day}`;
}

