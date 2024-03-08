import "./App.css";
import { API_RESOURCE_LIST } from "./constants";
import ResourceCard from "./hooks/ResourceCard";

function App() {
  return (
    <div className="App">
      <div className="headerBar">
        <header>
          <div>
            <h1>Status dashboard</h1>
          </div>
        </header>
      </div>
      <div className="dasboardContainer">
        {API_RESOURCE_LIST.map((apiResource) => (
          <ResourceCard type={apiResource.type} key={apiResource.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
