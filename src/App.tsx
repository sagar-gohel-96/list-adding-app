import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Partial from "./components/Partial";
export type Data = {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  mobileno: string;
};

function App() {
  const data: Data = {
    name: {
      firstname: "abc",
      lastname: "abc@gmail.com",
    },
    email: "xyz@gmail.com",
    mobileno: "123",
  };
  return (
    <div className="App">
      {/* <Form /> */}
      <Partial data={data} />
    </div>
  );
}

export default App;
