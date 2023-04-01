import "./App.css";
import { SearchCharacter } from "./custom/SearchCharacter";
import Characterlist from "./pages/Characterlist";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Characterlist />}>
          Characters
        </Route>
        <Route path="/:id" element={<SearchCharacter />}> Search Character</Route>
      </Routes>
      <Characterlist />
    </div>
  );
}

export default App;
