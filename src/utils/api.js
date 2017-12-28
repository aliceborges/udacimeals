
const API_ID = process.env.aliceborges_
const APP_KEY = process.env.udacity

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}
