export function filterItemsCategory(items, filterCase) {
  switch (filterCase) {
    case "START":
      return filterStarterItems(items);
    case "BASIC":
      return filterBasicItems(items);
    case "EPIC":
      return filterEpicItems(items);
    case "LEGENDARY":
      return filterLegendaryItems(items);
    case "MYTHIC":
      return filterMythicItems(items);
    case "BOOTS":
      return filterBootsItems(items);
    case "CONSUMABLE":
      return filterConsumableItems(items);
    case "TRINKET":
      return filterTrinketItems(items);
    case "OTHER":
      return filterOtherItems(items);
    default:
      return items;
  }
}

function filterStarterItems(items) {
  const arr = items.filter(
    (el) =>
      (el.tags.includes("Lane") ||
        el.tags.includes("Jungle") ||
        el.tags.includes("Mana")) &&
      !el.tags.includes("Trinket") &&
      !el.tags.includes("Consumable") &&
      !el.depth &&
      !el.specialRecipe &&
      !el.id.includes(1027) &&
      !el.id.includes(1036)
  );
  return sortFilteredData(arr);
}

function filterBasicItems(items) {
  const arr = items.filter(
    (el) =>
      !el.tags.includes("Trinket") &&
      !el.tags.includes("Consumable") &&
      !el.tags.includes("Lane") &&
      !el.tags.includes("Jungle") &&
      !el.tags.includes("Boots") &&
      !el.depth &&
      el.gold.purchasable &&
      !el.specialRecipe &&
      !el.id.includes(4638) &&
      !el.id.includes(3070)
  );
  arr.push(items.find((el) => el.id.includes(1036)));
  return sortFilteredData(arr);
}

function filterEpicItems(items) {
  const arr = items.filter(
    (el) =>
      el.depth === 2 &&
      !el.tags.includes("Boots") &&
      !el.tags.includes("Consumable") &&
      !el.id.includes(3031) && 
      !el.id.includes(3089)
  );
  return sortFilteredData(arr);
}

function filterLegendaryItems(items) {
  const arr = items.filter(
    (el) =>
      el.depth === 3 &&
      !el.tags.includes("Boots") &&
      !el.tags.includes("Consumable") &&
      !el.id.includes(4644) &&
      !el.description.includes("Mythic")
  );
  arr.push(items.find((el) => el.id.includes(3031)));
  arr.push(items.find((el) => el.id.includes(3089)));
  return sortFilteredData(arr);
}

function filterMythicItems(items) {
  const arr = items.filter(
    (el) =>
      el.depth === 4 &&
      !el.tags.includes("Boots") &&
      !el.tags.includes("Consumable")
  );
  return sortFilteredData(arr);
}

function filterBootsItems(items) {
  const arr = items.filter((el) => el.tags.includes("Boots"));
  return sortFilteredData(arr);
}

function filterConsumableItems(items) {
  const arr = items.filter(
    (el) =>
      el.tags.includes("Consumable") &&
      !el.id.includes(8020) &&
      !el.id.includes(3599) &&
      !el.id.includes(3600)
  );
  return sortFilteredData(arr);
}

function filterTrinketItems(items) {
  const arr = items.filter((el) => el.tags.includes("Trinket"));
  return sortFilteredData(arr);
}

export function filterSpecialRecipe(boolean, array, item) {
  let arr = [];
  if (boolean) {
    arr = array.filter((el) => el.specialRecipe === +item.id);
  } else {
    arr = array.filter((el) => item.specialRecipe === +el.id);
  }
  const newArr = [];
  arr.forEach((element) => {
    newArr.push(element.id);
  });
  return newArr;
}

function filterOtherItems(items) {
  const arr = items.filter(
    (el) => el.tags.includes("OnHit") && el.description === ""
  );
  return sortFilteredData(arr);
}

const sortFilteredData = (arr) => {
  arr.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return arr;
};
