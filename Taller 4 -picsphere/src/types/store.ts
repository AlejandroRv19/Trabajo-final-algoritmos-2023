export type Observer = { render: () => void } & HTMLElement;


export interface Screen_navigation{
  
    action:Navigation.Change_screen
    payload:Screens

}

export enum Screens  {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  DASBOARD = "DASBOARD",
};

export enum Navigation {
  "Change_screen" = "Change_screen",
}


export type AppState = {
  screen: Screens;
};


export type Actions = Screen_navigation; 
