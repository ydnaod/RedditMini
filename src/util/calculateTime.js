export const calculateTime = (utc) => {
    const now = Date.now();
    const nowDate = new Date(now);
    const postDate = new Date(utc * 1000);
    const diffTime = Math.abs(nowDate - postDate);
    const diffHours = (Math.ceil(diffTime / (1000 * 60 * 60)).toString() + ' hours ago');
    const diffDays = (Math.ceil(diffTime / (1000 * 60 * 60 * 24)).toString() + ' days ago');
    if (Math.ceil(diffTime / (1000 * 60 * 60)) >= 24) {
        return diffDays;
    }
    else {
        return diffHours;
    }
}