import React, { ComponentType, createContext } from "react";
import { theme } from "./theme";
import { ObjectLiteral } from "../type";

export const ThemeContext = createContext(theme);

export const withTheme = (Component: ComponentType<ObjectLiteral>) => {
  const ThemedComponent = (props: ObjectLiteral) => (
    <ThemeContext.Consumer>
      {(value) => <Component {...props} theme={value} />}
    </ThemeContext.Consumer>
  );

  return ThemedComponent;
};
