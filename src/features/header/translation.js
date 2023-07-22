import data from './data.json';

export default function t(key, language) {
  return data[key][language] || '';
}
