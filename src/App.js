import "./App.css";
import DataCrud from "./components/DataCrud";
// import DataList from "./components/DataList";

function App() {
  return (
    <div className="main">
      <div className="header"> To Do list</div>
      <div className="content">
        {/* <DataList /> */}
        <DataCrud />
      </div>
      <div className="footer"></div>
      console.log("test data for commit.");
    </div>
  );
}

export default App;
