import axios from "axios";
export function getCountries() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((r) => {
        console.log(r);
        resolve(r.data);
      })

      .catch((e) => reject(e));
  });
}
