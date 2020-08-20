import React from "react";
import customTheme from "../../styles/theme";

import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={customTheme}>
      <ColorModeProvider value="dark">
        <EmotionThemeProvider theme={customTheme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};

export default ThemeContainer;
