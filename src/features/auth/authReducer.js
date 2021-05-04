import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstatnts";

const initialState = {
  authenticated: true,
  currentUser: {
    email: "bob@test.com",
    photoURL: "/assets/user.png",
  },
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoUrl: "/assets/user.png",
        },
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
}
