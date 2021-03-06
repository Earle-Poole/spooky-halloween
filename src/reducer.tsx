export const initialState = {
  currentPage: 'Home',
}

export type State = typeof initialState

export type Action = { type: 'SET_CURRENT_PAGE'; payload: string}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload }
  }
}
