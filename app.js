let select = document.querySelector('select');
let option = document.querySelector("option")
let movies=document.querySelector(".movies");
const API_KEY = "1c107ac0fc3773c6b752c2fb2bb7c62f";
let language = "en-US";
select.addEventListener("change", ()=>{
    movies.innerHTML ="";
    getData(select.value);
})
const getData = async (language) => {
  let res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}-US&page=1`);
  let data = await res.json();
  data.results.map((a) =>{
    let movie=document.createElement("div");
     movie.classList.add("movie");
     movies.append(movie);
     let imgdiv=document.createElement("div");
     imgdiv.classList.add("imgdiv");
     let img=document.createElement("img");
     imgdiv.append(img);
      img.setAttribute("src",`https://image.tmdb.org/t/p/original/${a.poster_path}`);
     let details=document.createElement("div");
     let h4=document.createElement("h4");
     details.classList.add("details");
     details.append(h4)
     h4.textContent = a.title;
  movie.append(imgdiv,details);
})};
getData();


