export const isFuture = (date: string | Date): boolean => {
  if (!date) return false;
  return new Date(date).getTime() > Date.now();
};
