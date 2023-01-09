Vue.createApp({
  data() {
    return {
      name: ["Alice", "Bob", "Charlotte"],
      object: { Alice: 18, Bob: 24, Charlotte: 28 },
    };
  },
}).mount("#app");
