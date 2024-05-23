fetch('https://search.imdbot.workers.dev/?q=focus').then(response => response.json()).then(data => { 
    console.log("a", filterByYear(data.description, 2002))
    console.log("b", filterByActor(data.description, "Will Smith"));
    console.log("c", filterByRank(data.description, 1000, 5000));
    console.log("d", getAlltitle(data.description));
    console.log("e", getAlltitleAndYear(data.description));
    console.log("f", getIMDBandTitle(data.description));
    console.log("g", getURLandType(data.description));
    console.log("h", getDetails(data.description));
})

function filterByYear(data, ano) {
    return data.filter(pelicula => pelicula["#YEAR"] === ano);
  }
  
  function filterByActor(data, actor) {
    actor = actor.split(' ');
    for(let i = 0; i < actor.length; i++) {
      actor[i] = actor[i].charAt(0).toUpperCase() + actor[i].slice(1);
    }
    actor = actor.join(' ');

    return data.filter(pelicula => pelicula["#ACTORS"].includes(actor));
  }
  
  function filterByRank(data, rangoMin, rangoMax) {
    return data.filter(pelicula => pelicula["#RANK"] >= rangoMin && pelicula["#RANK"] <= rangoMax);
  }
  
  function getAlltitle(data) {
    return data.map(pelicula => pelicula["#TITLE"]);
  }
  function getAlltitleAndYear(data) {
    return data.map(pelicula => ({ titulo: pelicula["#TITLE"], anio: pelicula["#YEAR"] }));
  }
  
  function getIMDBandTitle(data) {
    return data.map(pelicula => ({ id: pelicula["#IMDB_ID"], titulo: pelicula["#TITLE"] }));
  }
  
  function getURLandType(data) {
    return data.map(pelicula => ({ url: pelicula["#IMDB_URL"], tipo: pelicula["#"] }));
  }
  
  function getDetails(data) {
    return data.filter(pelicula => pelicula["#TYPE"] === "movie")
               .map(pelicula => ({ titulo: pelicula["#TITLE"], ano: pelicula["#YEAR"], tipo: pelicula["#TYPE"] }));
  }
  
  
  