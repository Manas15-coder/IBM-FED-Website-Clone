//TMDB API
const api = "api_key=1cf50e6248dc270629e802686245c2c8";

const base_url = "https://api.themoviedb.org/3";

const url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;

const img_url = "https://image.tmdb.org/t/p/original";

const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=IN&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
}

//Banner

fetch(requests.fetchRomanceMovies)
.then((res)=>res.json())
.then((data)=>{
    console.log(data.results)

    const movieName  = data.results[Math.floor(Math.random()*data.results.length-1)];
    console.log(movieName);
    var banner =  document.getElementById("banner")
    document.body.style.backgroundImage="url("+img_url+movieName.backdrop_path+")";
    var banner_title = document.getElementById("banner-title");
    var banner_desc = document.getElementById("banner-desc");
    banner_title.innerText=movieName.name;
    banner_desc.innerText=movieName.overview.substr(0,150);
})


//movie row
fetch(requests.fetchRomanceMovies)
.then((res)=>res.json())
.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row= document.createElement("div");
    row.className="row";
    row.classList.add("netflix");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.classList="row__title";
    title.innerText="ROMANCE";
    row.appendChild(title);
    const row_posters= document.createElement("div");
    row_posters.className="row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie=>{
        const poster = document.createElement("img");
        poster.className="row_poster_large";
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster);
    })
})