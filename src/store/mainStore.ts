import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => {
    return {
      msg: 'hello'
    }
  }
});
