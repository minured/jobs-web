export const updateStore = (key, value) => {
  globalStore[key] = value
}

export const globalStore = {
  currentPageKey: 'home',
  mainColor: '#66cc99',
  updateStore,
}
