import React from "react";
import { GetRandomAsteroid, GetAsteroidById } from "./network/Apimanager";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asteroidID: "",
      isDisabled: true,
      name: "",
      nasa_jpl_url: "",
      is_potentially_hazardous_asteroid: "",
    };
  }
  handleTextChange = (type, value) => {
    console.log("this is the value", value);
    this.setState({
      [type]: value,
    });
  };
  getRandomAsteroid = async () => {
    const data = await GetRandomAsteroid();
    console.log("value from app", data);
    this.setState({
      name: data.name,
      nasa_jpl_url: data.nasa_jpl_url,
      is_potentially_hazardous_asteroid: data.is_potentially_hazardous_asteroid,
    });
  };
  getAsteroidById = async () => {
    const { asteroidID } = this.state;
    const data = await GetAsteroidById(asteroidID);
    console.log("data", data);
    this.setState({
      name: data.name,
      nasa_jpl_url: data.nasa_jpl_url,
      is_potentially_hazardous_asteroid: data.is_potentially_hazardous_asteroid,
    });
  };
  render() {
    const {
      asteroidID,
      name,
      is_potentially_hazardous_asteroid,
      nasa_jpl_url,
    } = this.state;
    return (
      <div className="App">
        <input
          placeholder="`Enter Asteroid ID"
          onChange={(e) => this.handleTextChange("asteroidID", e.target.value)}
        />
        <button
          onClick={() => {
            this.getAsteroidById();
          }}
          disabled={asteroidID.length ? false : true}
        >
          Submit
        </button>
        <button
          onClick={() => {
            this.getRandomAsteroid();
          }}
        >
          Random Asteroid
        </button>

        <div>
          <div>
            <h4>Name</h4>
            <p>{name}</p>
          </div>
          <div>
            <h4>is_potentially_hazardous_asteroid</h4>
            <p>{is_potentially_hazardous_asteroid ?"TRUE":"FALSE"}</p>
          </div>
          <div>
            <h4>nasa_jpl_url</h4>
            <a href={`${nasa_jpl_url}`}>
              {nasa_jpl_url}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
