export const reducer = (state, action) => {
    if (action.type === "THEME") return { ...state, dark: !state.dark }
    if (action.type === "FONT") return { ...state, size: action.payload }
    return state
  }
  