import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
firebaseInitialize();
const useFirebase = () => {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const auth = getAuth();
  const googleLogin = new GoogleAuthProvider();
  //   regisraton
  const registration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setErrorMessage("");
        // save user to the database
        saveUser(email, "POST");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        // console.log(error);
      });
  };
  //   password login
  const loginWithPassword = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
      });
  };
  // gmail login
  const loginWithGmail = (location, history) => {
    signInWithPopup(auth, googleLogin)
      .then((result) => {
        // console.log(result.user);
        // const user = result.user;
        saveUser(result?.user?.email, "PUT");
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setUser(result.user);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  //   user tracker
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  //   logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // save use to the database
  const saveUser = (email, method) => {
    const user = { email, method };
    fetch("https://fathomless-springs-74672.herokuapp.com/usercollection", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // admin
  useEffect(() => {
    fetch(
      `https://fathomless-springs-74672.herokuapp.com/usercollection/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);
  return {
    admin,
    user,
    errorMessage,
    registration,
    logout,
    loginWithPassword,
    loginWithGmail,
  };
};
export default useFirebase;
