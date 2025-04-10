function getDSTStartDate(year) {
    // DST starts on the second Sunday in March
    const start = new Date(year, 2, 1); // Start with March 1st
    const dayOfWeek = start.getUTCDay(); // Get the day of the week for March 1st
    const daysUntilSunday = (7 - dayOfWeek + 1) % 7; // Calculate the days until the next Sunday
    start.setUTCDate(1 + daysUntilSunday + 7); // Move to the second Sunday of March
    start.setUTCHours(2, 0, 0, 0); // Set to 2 AM local time
    return start;
}

function getDSTEndDate(year) {
    // DST ends on the first Sunday in November
    const end = new Date(year, 10, 1); // Start with November 1st
    const dayOfWeek = end.getUTCDay(); // Get the day of the week for November 1st
    const daysUntilSunday = (7 - dayOfWeek + 1) % 7; // Calculate the days until the next Sunday
    end.setUTCDate(1 + daysUntilSunday); // Move to the first Sunday of November
    end.setUTCHours(2, 0, 0, 0); // Set to 2 AM local time
    return end;
}

 function isDST() {
    const today = new Date();
    const currentYear = today.getUTCFullYear();

    const dstStart = getDSTStartDate(currentYear);
    const dstEnd = getDSTEndDate(currentYear);

    // Check if today's date is between the DST start and end dates
    return today >= dstStart && today < dstEnd;
}


module.exports = isDST, getDSTEndDate, getDSTStartDate;
