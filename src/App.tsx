import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { BoardView } from "./components/main-content/board-view/BoardView";
import { MainContent } from "./components/main-content/MainContent";
import { Settings } from "./components/main-content/Settings";
import { Dispatch, createContext, useState } from "react";

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  setTheme: () => {},
});

interface IThemeContext {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
}

export const App = () => {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  return (
    <div>
      <ThemeContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainContent />}>
              <Route path="/" element={<BoardView />} />
              <Route path="/board" element={<BoardView />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
};
