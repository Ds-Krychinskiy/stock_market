import {MapPages} from "./routes"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom" 
const App = () => {
  return (
    <Router>
    {MapPages.map(({Component, RouteComponent})=>(
      <Routes key={RouteComponent}>
        <Route path={`/${RouteComponent}`} element={<Component></Component>}/>
      </Routes>
    ))}
    </Router>
  );
};

export default App;
