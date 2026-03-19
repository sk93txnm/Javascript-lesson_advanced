import { $axios } from './axiosHelper.js';
import { createErrorElement, createElements } from './createElement.js';

window.addEventListener('DOMContentLoaded', () => {
  const characterlist = document.getElementById('list');

  // 1. すべてのポケモン一覧を取得
  $axios('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(async response => {
      const results = response.data.results;

      try {
        // 2. 全ポケモンの詳細情報を並列で取得
        const detailPromises = results.map(pokemon => $axios(pokemon.url));
        const detailList = await Promise.all(detailPromises);

        // 3. 全ポケモンの種族情報も並列で取得
        const speciesPromises = detailList.map(detailRes =>
          $axios(detailRes.data.species.url)
        );
        const speciesList = await Promise.all(speciesPromises);

        // 4. 順番通りに HTML を作成して append
        detailList.forEach((detailRes, index) => {
          const imgUrl =
            detailRes.data.sprites.other['official-artwork'].front_default;

          const jpName = speciesList[index].data.names[0].name;

          const html = `
            <li class="list-item">
              <div class="character">
                <img src="${imgUrl}" width="475" height="475" alt="${jpName}" class="character__img">
              </div>
              <p class="character__name">${jpName}</p>
            </li>
          `;

          const fragment = createElements(html);
          characterlist.appendChild(fragment);
        });

      } catch (err) {
        const errorEl = createErrorElement(err);
        characterlist.appendChild(errorEl);
      }
    })
    .catch(err => {
      const errorEl = createErrorElement(err);
      characterlist.appendChild(errorEl);
    });
});





