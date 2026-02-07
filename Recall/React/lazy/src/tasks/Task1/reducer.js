export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [action.payload, ...state]
      case "CLEAR":
        return []
      default:
        return state
    }
  }
  