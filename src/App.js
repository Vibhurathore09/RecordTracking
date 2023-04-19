import "./App.css";
import Header from "./Components/Header";
import { TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
// import Fields from "./Components/Fields";
function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { form }]);
    // setForm({});
    setForm({name:"" , email : ""});
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ mt: "10px" }}
          />
          <TextField
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ mt: "10px" }}
          />
          <Button color="success" variant="contained" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* {Data} */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.form.name}</h4>
              <h4>{element.form.email}</h4>
              <Button
                onClick={() => removeItem(index)}
                variant="contained"
                color="error"
              >
                <DeleteIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
