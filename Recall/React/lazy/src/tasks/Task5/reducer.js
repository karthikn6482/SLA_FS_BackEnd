export const reducer = (state, action) => {
    if (action.type === "ADD") return [...state, action.payload]
    if (action.type === "DEL") return state.filter((_, i) => i !== action.payload)
    return state
  }
  