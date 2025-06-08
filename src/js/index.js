const input = document.querySelector(".search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function fetchCountries(query) {
  return fetch(
    `https://restcountries.com/v3.1/name/${query}?fields=name,capital,population,flags,languages`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Країну не знайдено");
    }
    return response.json();
  });
}

function onSearch(e) {
  const query = e.target.value.trim();

  countryList.innerHTML = "";
  countryInfo.innerHTML = "";

  if (!query) return;

  fetchCountries(query)
    .then((countries) => {
      if (countries.length > 10) {
        countryList.innerHTML = "<p>Забагато збігів. Введіть щось точніше.</p>";
      } else if (countries.length >= 2 && countries.length <= 10) {
        renderCountryList(countries);
      } else if (countries.length === 1) {
        renderCountryInfo(countries[0]);
      }
    })
    .catch((error) => {
      countryList.innerHTML = "<p>Країну не знайдено. Спробуйте ще раз.</p>";
    });
}

function renderCountryList(countries) {
  const markup = countries.map((c) => `<li>${c.name.common}</li>`).join("");
  countryList.innerHTML = `<ul>${markup}</ul>`;
}

function renderCountryInfo(country) {
  const html = `
    <h2>${country.name.common}</h2>
    <img src="${country.flags.svg}" alt="Прапор ${
    country.name.common
  }" width="100" />
    <p>Столиця: ${country.capital?.[0] || "Немає"}</p>
    <p>Населення: ${country.population.toLocaleString()}</p>
    <p>Мови: ${Object.values(country.languages || {}).join(", ")}</p>
  `;
  countryInfo.innerHTML = html;
}

input.addEventListener("input", debounce(onSearch, 500));
