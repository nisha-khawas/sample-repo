import axios from "axios";
export function getMealCategories() {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
