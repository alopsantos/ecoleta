function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }
    });
}
populateUFs()

function getCities(event){
  const citySelect = document.querySelector("name=city")
  const stateInput = document.querySelector("name=state")


  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.option[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
  citySelect.disabled = true

  fetch(url)
  .then( res => res.json())
  .then( cities => {
    for (const city of cities ){
      citySelect.innerHTML += `<option value="${city.id}">${city.nome}"</option>`
    }
    citySelect.disabled = false
  })

}

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
  item.addEventListener("click", handleSelectedItem)
}

function handleSelectedItem(event){
  const itemLi = event.target
  itemLi.classList.toggle("selected")

  const itemid = itemLi.dataset.id
}