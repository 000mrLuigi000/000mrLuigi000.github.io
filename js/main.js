let xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("GET","https://api.themoviedb.org/3/movie/popular?api_key=69e1c4f65af176073150a2d5e4ea79d8&language=ru-RU&page=2");   
if (xhr.onreadystatechange = function(){
    if ((this.status < 400) && (this.readyState == 4)){
        let data = xhr.response;
        intin(data);
    }
})
xhr.send();
function intin(obj){
    let poster = document.getElementById("poster");
    let foto = document.getElementById("foto");
    let _date = document.getElementById("data");
    let title = document.getElementById("title");
    let original_title = document.getElementById("original_title");
    let raiting = document.getElementById("imdb");
    let n=0;
    poster.style.backgroundImage = "url(https://image.tmdb.org/t/p/original"+(obj.results[0].poster_path)+")";
    foto.style.backgroundImage = "url(https://image.tmdb.org/t/p/original"+(obj.results[0].poster_path)+")";
    title.innerHTML = obj.results[0].title;
    original_title.innerHTML = obj.results[0].original_title;
    _date.innerHTML = new Date(obj.results[0].release_date).getFullYear();
    raiting.innerHTML = obj.results[0].vote_average;
    setInterval(()=>{
        n++;
        if (n==20) { n=0;}
        console.log(n);
        poster.style.backgroundImage = "url(https://image.tmdb.org/t/p/original"+(obj.results[n].poster_path)+")";
        foto.style.backgroundImage = "url(https://image.tmdb.org/t/p/original"+(obj.results[n].poster_path)+")";
        title.innerHTML = obj.results[n].title;
        original_title.innerHTML = obj.results[n].original_title;
        _date.innerHTML = new Date(obj.results[n].release_date).getFullYear();
        raiting.innerHTML = obj.results[n].vote_average;
    },5000);
    console.log(obj);
}