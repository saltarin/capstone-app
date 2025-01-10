export const getMidnightUTC = () => {
    const now = new Date();
    const todayMidnightUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    return todayMidnightUTC
}

export const getCurrentDateUTC = () => {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}