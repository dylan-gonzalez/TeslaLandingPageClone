export const reducer = (state, action) => {
  switch (action.type) {
    case "toggle_blur":
      return {
        ...state,
        blur_active: !state.blur_active,
      };
    default:
      return state;
  }
};

export const initialState = {
    blur_active: false
}