export const toCamelCase = (word) => {
  return word.replace(/[_-]./g, (match) => match.charAt(1).toUpperCase());
};

export const productTitleToUrl = (title) => {
  const camelCasedTitle = toCamelCase(title);
  return camelCasedTitle.split(' ').join('-');
};

export const calculateTotalPriceOnCart = (allItems) => {
  return Object.keys(allItems).reduce((total, id) => {
    // eslint-disable-next-line no-param-reassign
    total += Number(allItems[id].price);
    return total;
  }, 0);
};
