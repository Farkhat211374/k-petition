import { defineStore } from "pinia";
import { api } from "boot/axios";

export const usePetitionStore = defineStore("petitionStore", {
  state: () => ({
    data: [],
    loading: false,
    error: null,
  }),
  getters: {
    getData: (state) => state.data,
  },
  actions: {
    async fetchAllData() {
      this.loading = true;
      try {
        const response = await api.get(
          "https://a3958a0cbd50a8f8.mokky.dev/petition"
        );
        this.data = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchData(id) {
      this.loading = true;
      try {
        const response = await api.get(
          `https://a3958a0cbd50a8f8.mokky.dev/petition/${id}`
        );
        this.data = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
