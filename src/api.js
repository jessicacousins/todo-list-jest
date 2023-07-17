export const api = {
  createItem: (newItem) => {
    return Promise.resolve(newItem);
  },
};

const apiCreateItem = (newItem) => {
  return Promise.resolve(newItem);
};

api.createItem = apiCreateItem;
