import { BrowserRouter, Route, Routes } from "react-router-dom";
import Media from "react-media";
import Chat from "./components/Chat";
import "./App.sass"

function App() {
  return (
    <BrowserRouter>
      {/* Para celular */}
      <Media query="(max-width: 768px)">
        <Routes>
          <Route exact path="/"/>
          <Route path="/cadastro"/>
          <Route path="/history"/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </Media>

      {/* Para pc */}
      <Media query="(min-width: 768px)">
        <Routes>
          <Route exact path="/"/>
          <Route path="/cadastro"/>
          <Route path="/chat" element={/*historico*/<Chat/>}/>
        </Routes>
      </Media>
    </BrowserRouter>
  );
}

export default App;
