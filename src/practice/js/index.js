import { $axios } from './axiosHelper.js';
import { createErrorElement, createElements } from './createElement.js';

window.addEventListener('DOMContentLoaded', () => {
  const characterlist = document.getElementById('list');

  // 1. すべてのポケモンを取得するためのリクエスト
  $axios('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => {
      const results = response.data.results;

      // 2. ポケモンの詳細情報を取得するためのリクエスト
      results.forEach(pokemon => {
        $axios(pokemon.url)
          .then(detailRes => {  
            const imgUrl = 
              detailRes.data.sprites.other['official-artwork'].front_default;
            const speciesUrl = detailRes.data.species.url;

            // 3. ポケモン名の日本語訳を取得するためのリクエスト
            $axios(speciesUrl)
              .then(speciesRes => {
                const jpName = speciesRes.data.names[0].name;

                // HTML 要素を作成
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
              })
              .catch(err => {
                const errorEl = createErrorElement(err);
                characterlist.appendChild(errorEl);
              });
          })
          .catch(err => {
            const errorEl = createErrorElement(err);
            characterlist.appendChild(errorEl);
          });
      });
    })
    .catch(err => {
      const errorEl = createErrorElement(err);
      characterlist.appendChild(errorEl);
    });
});


