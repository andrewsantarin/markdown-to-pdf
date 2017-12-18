import html2pdf from 'html2pdf.js';

const SettingsService = {
  exportHtmlToPdf(html, data) {
    const options = SettingsService.mapDataToOptions(data);
    
    html2pdf(html, options);

    return Promise.resolve(data);
  },

  mapDataToOptions(data) {
    const { margin, image } = data;
    const { top, bottom, left, right } = margin;
    const { quality } = image;
    const options = {
      ...data,
      margin: [ top, bottom, left, right ],
      image: {
        ...image,
        quality: quality / 100,
      },
    };

    return options;
  },
};

export default SettingsService;
