export function parseDateAndTime(date) {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("en-US", { month: "long" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const time = dateObj.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });

    // const dateData = {
    //     month,
    //     day,
    //     year,
    //     time,
    // };


    return `${month} ${day}, ${year} at ${time}`;
}