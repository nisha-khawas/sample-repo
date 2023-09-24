import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

export function logInWithGoogle() {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      let newUser = {
        name: user?.displayName,
        accessToken: user?.accessToken,
        email: user?.email,
        image: user?.photoURL,
      };
      let newUserStr = JSON.stringify(newUser);
      localStorage.setItem("user", newUserStr);
      window.location.href = "/";
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export const isUserLoggedIn = () => {
  let user = localStorage.getItem("user");
  if (user && user.length > 0) {
    return true;
  } else {
    return false;
  }
};
export const getUser = () => {
  let user = localStorage.getItem("user");
  if (isUserLoggedIn()) {
    return JSON.parse(user);
  }
};
