export type InitStateType = 'dark' | 'red' | 'some';
export type ChangeThemeCType = ReturnType<typeof changeThemeC>;

const initState: InitStateType = 'some';
export const themeReducer = (state: InitStateType = initState, action: ChangeThemeCType): InitStateType => {
  // fix any
  switch (action.type) {
    case 'CHANGE-THEME': {
      return action.theme;
    }
    default:
      return state;
  }
};

export const changeThemeC = (theme: InitStateType) => {
  return {
    type: 'CHANGE-THEME',
    theme: theme,
  } as const;
}; // fix any
