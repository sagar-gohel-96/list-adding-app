import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Partial from "./components/Partial";
type Data = {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
};

function App() {
  const data: Data = {
    name: {
      firstname: "abc",
      lastname: "abc@gmail.com",
    },
    email: "xyz@gmail.com",
  };
  return (
    <div className="App">
      {/* <Form /> */}
      <Partial data={data} />
    </div>
  );
}

export default App;
