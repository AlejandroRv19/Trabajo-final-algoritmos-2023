import { Actions, AppState, Navigation } from "../types/store";

export const reducer = (
  currentAction: Actions,
  currentState: AppState
): AppState => {
  const { action, payload } = currentAction;

  switch (action) {
    case Navigation.Change_screen:
      return {
        ...currentState,
        screen: payload,
      };

    default:
      return currentState;
  }
};