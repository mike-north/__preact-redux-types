import { createStore } from 'redux';

export interface AppState {
  todos: {
    id: string;
    text: string;
  }[]
}

interface IReducer {
  (prevState: AppState, action: any): AppState
}

interface IActions {
  [index: string]: IReducer
}

let ACTIONS: IActions = {
	ADD_TODO(prevState: AppState, action: any) {
    let { todos, ...state } = prevState;
    let { text } = action
    return {
      todos: [...todos, {
        id: Math.random().toString(36).substring(2),
        text
      }],
      ...state
    };
  }
};

const INITIAL_STATE: AppState = {
	todos: []
};

export const store = createStore(
  (state, action: {type: string}) => (
    action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
  ),
  INITIAL_STATE,
  devToolsExtension && devToolsExtension()
);