var app = new Vue({

    el: "#root",

    data: {

        moviesList: [],

        tvShowsList: [],

        searchText: "",

        flagsList: ["be", "bg", "ca", "cn", "de", "en", "es", "fr", "gr", "hr", "ie", "il", "it", "jp", "kr", "nl", "pl", "pt", "ru", "tr"]

    },

    methods: {
    
        search() {

            if (this.searchText != "") {

                axios

                .get("https://api.themoviedb.org/3/search/movie",

                    {
                        params: {

                            api_key: "3410f7b084766853ff2eead521a6391b",

                            query: this.searchText,

                            language: 'it-IT'
                        }
                    }
                )

                .then((response) => {

                    this.moviesList = response.data.results;

                });

                axios 

                .get("https://api.themoviedb.org/3/search/tv",

                    {
                        params: {

                            api_key: "3410f7b084766853ff2eead521a6391b",

                            query: this.searchText,

                            language: 'it-IT'
                        }
                    }
                )

                .then((response) => {

                    this.tvShowsList = response.data.results;

                });

            }

            this.searchText = "";
        },

        voteStars(number) {

            return Math.ceil(number / 2);
        },

        getFlag(index) {
            
            return this.flagsList.includes(index);
        }

    }

});