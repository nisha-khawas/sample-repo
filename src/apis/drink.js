import axios from "axios";

export function getRandomDrink() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function getDrinkById(drinkId) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
      )
      .then((res) => resolve(res?.data))
      .catch((err) => reject(err));
  });
}
export function getDrinkCategories() {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .then((res) => resolve(res?.data))
      .catch((err) => reject(err));
  });
}

export function getDrinksByCategory(category) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      )
      .then((res) => resolve(res?.data))
      .catch((err) => reject(err));
  });
}
export function getDrinksByName(name) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => resolve(res?.data))
      .catch((err) => reject(err));
  });
}
export function getDrinksByFirstLetter(letter) {
  return new Promise((resolve, reject) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log("here inside resp");
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
