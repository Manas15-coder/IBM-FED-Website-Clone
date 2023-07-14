


//trending

fetch(requests.fetchTrending)
.then((res)=>res.json())
.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row =document.createElement("div");
    row.className ="row";
    row.classList.add("trending");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className="row__title";
    title.innerText="TRENDING";
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

//action

fetch(requests.fetchActionMovies)
.then((res)=>res.json())
.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row =document.createElement("div");
    row.className ="row";
    row.classList.add("trending");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className="row__title";
    title.innerText="ACTION";
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

//comedy

fetch(requests.fetchComedyMovies)
.then((res)=>res.json())
.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row =document.createElement("div");
    row.className ="row";
    row.classList.add("trending");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className="row__title";
    title.innerText="COMEDY";
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

//Horror

fetch(requests.fetchHorrorMovies)
.then((res)=>res.json())
.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row =document.createElement("div");
    row.className ="row";
    row.classList.add("trending");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className="row__title";
    title.innerText="HORROR";
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

//Romance

fetch(requests.fetchRomanceMovies)
.then((res)=>res.json())
.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row =document.createElement("div");
    row.className ="row";
    row.classList.add("trending");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className="row__title";
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

//Documentaries

fetch(requests.fetchDocumentaries)
.then((res)=>res.json())
.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row =document.createElement("div");
    row.className ="row";
    row.classList.add("trending");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className="row__title";
    title.innerText="DOCUMENTARIES";
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