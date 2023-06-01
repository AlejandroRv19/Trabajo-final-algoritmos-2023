import { Screen_navigation, Navigation, Screens } from "../types/store";

export const navigate = (screen: Screens): Screen_navigation => {
  return {
    action: Navigation.Change_screen,
    payload: screen,
  };
};