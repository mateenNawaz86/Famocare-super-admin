import { isJSON } from "./function";
import { getUser } from "./auth";
import { setSignedUser, setUser } from "../api/slices/authSlice/auth";

export const useGlobalUser = (user, dispatch) => {
  const cookieUser = isJSON(getUser());

  if (!user) {
    dispatch(setUser(cookieUser));
    dispatch(setSignedUser(cookieUser));
  }
};
