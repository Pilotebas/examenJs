
function filtrar() {
  const nombre = document.getElementById('nombreInput').value;
  
    const cardData = fetch ("https://search.imdbot.workers.dev/?q=Spiderman").then(response => response.json()).then(data => { 
    dataUpdate = data.description;
    return dataUpdate;
    });
  console.log(cardData);
  const cardHTML = `
    <div class="card">
      <h3>${cardData.nombre}</h3>
      <p>Año: ${cardData.ano}</p>
      <p>Rango: ${cardData.rango}</p>
    </div>
  `;
  
  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = cardHTML;
}