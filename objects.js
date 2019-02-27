var movies = [
    {
        title : "Aquaman",
        rating : 4.5,
        hasWatched : false,
        comments : [],
        addComments: function(comment) {
            this.comments.push(comment);
        }
    },
    {
        title : "Lego Movie 2",
        rating : 4.5,
        hasWatched : false,
        comments : []
    },
    {
        title : "Star Wars",
        rating : 4.2,
        hasWatched : true,
        comments : []
    },
    {
        title : "The Eye",
        rating : 3.7,
        hasWatched : false,
        comments : []
    }
]

movies.forEach(function(movie, i) {
    console.log(buildString(movie));
})

function buildString(movie) {
    var output = "You have ";
    if (movie.hasWatched) {
        output += "watched ";
    } else {
        output += "not seen ";
    }
    output += "\"" + movie.title +"\" (rating: "+ movie.rating +")";
    return output;
}