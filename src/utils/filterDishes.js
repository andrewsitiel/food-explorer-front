export function filterDishes(info, allDishes) {
  if (info) {
    const dishesFilteredByTitle = allDishes.filter(({ name }) => name.toLowerCase().search(info.toLowerCase()) > -1);

    if (dishesFilteredByTitle.length === 0) {
      const dishesFilteredByTag = allDishes.filter(({ ingredients }) => ingredients.find((name) => name.toLowerCase().search(info.toLowerCase()) > -1));

      return dishesFilteredByTag;
    } else {
      return dishesFilteredByTitle;
    }
  }
}