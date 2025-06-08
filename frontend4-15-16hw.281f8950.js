var e;let n;const u=document.querySelector(".search-box"),t=document.querySelector(".country-list"),o=document.querySelector(".country-info");u.addEventListener("input",(e=function(e){let n=e.target.value.trim();(t.innerHTML="",o.innerHTML="",n)&&fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,flags,languages`).then(e=>{if(!e.ok)throw Error("Країну не знайдено");return e.json()}).then(e=>{var n;e.length>10?t.innerHTML="<p>Забагато збігів. Введіть щось точніше.</p>":e.length>=2&&e.length<=10?function(e){let n=e.map(e=>`<li>${e.name.common}</li>`).join("");t.innerHTML=`<ul>${n}</ul>`}(e):1===e.length&&(n=e[0],o.innerHTML=`
    <h2>${n.name.common}</h2>
    <img src="${n.flags.svg}" alt="\u{41F}\u{440}\u{430}\u{43F}\u{43E}\u{440} ${n.name.common}" width="100" />
    <p>\u{421}\u{442}\u{43E}\u{43B}\u{438}\u{446}\u{44F}: ${n.capital?.[0]||"Немає"}</p>
    <p>\u{41D}\u{430}\u{441}\u{435}\u{43B}\u{435}\u{43D}\u{43D}\u{44F}: ${n.population.toLocaleString()}</p>
    <p>\u{41C}\u{43E}\u{432}\u{438}: ${Object.values(n.languages||{}).join(", ")}</p>
  `)}).catch(e=>{t.innerHTML="<p>Країну не знайдено. Спробуйте ще раз.</p>"})},function(...u){clearTimeout(n),n=setTimeout(()=>e.apply(this,u),500)}));
//# sourceMappingURL=frontend4-15-16hw.281f8950.js.map
