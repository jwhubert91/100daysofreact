export function prefersSpam(boolean) {
  return {
    type: "SET_PREFERS_SPAM",
    payload: boolean
  }
}

export function prefersCritical(boolean) {
  return {
    type: "SET_PREFERS_CRITICAL",
    payload: boolean
  }
}

export function prefersCreditCards(boolean) {
  return {
    type: "SET_PREFERS_CREDIT_CARDS",
    payload: boolean
  }
}

export function prefersExtendedWarrantyCalls(boolean) {
  return {
    type: "SET_PREFERS_CALLS",
    payload: boolean
  }
}

const defaultPreferences = {
  spam: true,
  criticalEmail: true,
  creditCards: true,
  calls: true
}

export default function mailPreferences(preferences = defaultPreferences, action) {
  switch (action.type) {
    case "SET_PREFERS_SPAM":
      return {
        ...preferences,
        spam: action.payload
      }
    case "SET_PREFERS_CRITICAL":
      return {
        ...preferences,
        criticalEmail: action.payload
    }
    case "SET_PREFERS_CREDIT_CARDS":
      return {
        ...preferences,
        creditCards: action.payload
    }
    case "SET_PREFERS_CALLS":
      return {
        ...preferences,
        calls: action.payload
    }
    default:
      return preferences
  }
}