
var myFavMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
}

const printMovie=function (movie){
    console.log (movie.title + ' duurt ' + movie.duration + ' minuten ' + ' begint met ' + movie.stars.join(','));
    
}
printMovie(myFavMovie);

