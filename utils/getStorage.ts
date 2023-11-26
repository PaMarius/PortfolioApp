export const getStorage = <T = string>(
  storageType: "local" | "session",
  key: string,
  parseAs?: "boolean" | "number" | "json"
): T | null => {
  if (typeof window !== "undefined") {
    const storageValue =
      storageType === "local"
        ? localStorage.getItem(key)
        : sessionStorage.getItem(key);

    if (parseAs) {
      switch (parseAs) {
        case "boolean":
          return storageValue === "true" ? (true as T) : (false as T);
        case "number":
          return parseFloat(storageValue || "0") as T;
        case "json":
          return JSON.parse(storageValue || "null") as T;
        default:
          break;
      }
    }

    return storageValue === null ? null : (storageValue as T);
  }

  return null;
};
