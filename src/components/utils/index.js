export const formatDate = (dateToFormat) => {
    let newDate = (new Date(dateToFormat)).toString();
    return newDate.slice(0, newDate.indexOf('G'));
}