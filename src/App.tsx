import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { BoardView } from "./components/main-content/board-view/BoardView";
import { MainContent } from "./components/main-content/MainContent";
import { Settings } from "./components/main-content/Settings";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />}>
            <Route path="/board" element={<BoardView />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
