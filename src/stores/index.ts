export const updateStore = (key, value) => {
  globalStore[key] = value
}

export const globalStore = {
  currentPageKey: 'home',
  updateStore,
}
