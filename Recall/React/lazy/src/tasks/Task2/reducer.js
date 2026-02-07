export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [action.payload, ...state].slice(0, 5)
      case "CLEAR":
        return []
      default:
        return state
    }
  }
  