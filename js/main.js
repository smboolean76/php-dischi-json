const { createApp } = Vue;

createApp({
  data() {
    return {
      albums: [],
      genre: "",
    };
  },
  created() {
    axios.get("http://localhost:8888/php-dischi-json/api.php").then((res) => {
      this.albums = res.data;
    });
  },
  methods: {
    onSelectChange() {
      console.log(this.genre);
      axios
        .get("http://localhost:8888/php-dischi-json/api.php", {
          params: {
            genre: this.genre,
          },
        })
        .then((res) => {
          this.albums = res.data;
        });
    },
  },
}).mount("#app");
