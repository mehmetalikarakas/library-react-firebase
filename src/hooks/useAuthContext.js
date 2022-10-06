import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("Bir hata oluştu. Context bulunamadı.");
  }

  return context;
};

export default useAuthContext;
