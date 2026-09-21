export const isFuture = (date: string | Date): boolean => {
  if (!date) return false;
  return new Date(date).getTime() > Date.now();
};

export const normalizeExpiry = (expiry?: string | Date): Date => {
  if (!expiry) return new Date();

  const newDate = new Date(expiry);

  // Just in case it's an invalid date string
  if (isNaN(newDate.getTime())) return new Date();

  if (newDate.getUTCSeconds() === 59) {
    newDate.setSeconds(newDate.getSeconds() + 1);
  }

  return newDate;
};
