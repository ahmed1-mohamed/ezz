export const renderMessage = (message: any): string => {
  if (!message) return "";
  if (typeof message === "string") return message;
  if (typeof message === "object") {
    if (Array.isArray(message)) {
      return message.join(", ");
    }
    try {
      const values = Object.values(message).flat();
      return values.map(val => typeof val === "string" ? val : JSON.stringify(val)).join(", ");
    } catch {
      return JSON.stringify(message);
    }
  }
  return String(message);
};
