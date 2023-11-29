export const downloadFile = async (
  filePath: string,
  fileName: string,
  errorFunction?: () => void
) => {
  try {
    const response = await fetch(filePath);
    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(anchor);
  } catch (error) {
    errorFunction?.();
  }
};
