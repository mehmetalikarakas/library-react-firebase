import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Kullanıcı Oluştu.", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signup };
};

export default useSignup;
