var app = new Vue({

    el: "#root",

    data: {

        filmsList: [],

        searchText: "",

    },

    methods: {
    
        search() {

            if (this.searchText != "") {

                axios

                .get("https://api.themoviedb.org/3/search/movie?api_key=3410f7b084766853ff2eead521a6391b&query=" + this.searchText)

                .then((response) => {

                    this.filmsList = response.data.results;

                    this.searchText = "";

                });

            }
        }
    }

});