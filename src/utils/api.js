const API_ID = process.env.REACT_APP_API_ID
const APP_KEY = process.env.REACT_APP_APP_KEY

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=9df48134&app_key=2633dff48c52ad278d56899982c33693`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}
