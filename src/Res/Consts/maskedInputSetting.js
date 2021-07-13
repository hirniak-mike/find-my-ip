export const maskedSettingIP = {
  guide: false,
  placeholderChar: '\u2000',
  mask: value => Array(value.length).fill(/[\d.]/),
  pipe: value => {
    if (value === '.' || value.endsWith('..')) return false;
    const parts = value.split('.');
    if (
      parts.length > 4 ||
      parts.some(part => part === '00' || part < 0 || part > 255)
    ) {
      return false;
    }
    return value;
  },
};