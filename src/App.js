import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "./Query";
import Home from "./Components/Home";

function App() {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: {
      username: "facebook",
      repository: "react",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
