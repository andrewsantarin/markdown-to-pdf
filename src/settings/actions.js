export function exportHtmlToPdf(data) {
  return (dispatch, getState) => {
    const { markdown } = getState().app;
    return SettingsService.exportHtmlToPdf(markdown, data);
  }
}