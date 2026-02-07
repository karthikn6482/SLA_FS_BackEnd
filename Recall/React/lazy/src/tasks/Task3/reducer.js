export const reducer = (state, action) => {
    if (action.type === "SET")
      return { ...state, [action.field]: action.value }
    if (action.type === "RESET")
      return { name: "", email: "", password: "" }
    return state
  }
  