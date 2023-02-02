import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showDetails: {},
    };
  }

  componentDidMount() {
    //Fetch API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        const showDetails = {};
        data.forEach((user) => {
          showDetails[user.id] = false;
        });
        this.setState({ data: data, showDetails });
      });
  }
  toggleFullDetails = (id) => {
    let showDetails = this.state.showDetails;
    showDetails[id] = !showDetails[id];
    this.setState({ showDetails });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="main_1">
          {this.state.data.map((item) => (
            <div className="data-container" key={item.id}>
              <ul
                className="d-flex rounded text-center justify-content-start 
            "
              >
                <li className="first">
                  <p> {item.company.name}</p>
                </li>
                <li>
                  <ul className="second">
                    <li className="f">Contact</li>
                    <li> {item.username}</li>
                  </ul>
                </li>
                <li>
                  <ul className="third">
                    <li className="f"> City</li>
                    <li>{item.address.city}</li>
                  </ul>
                </li>
                <li>
                  <ul className="fourth">
                    <li className="f"> State</li>
                    <li> {item.address.state}</li>
                  </ul>
                </li>
              
                <li className="fifth">    <button className="btn btn-danger" onClick={() => this.toggleFullDetails(item.id)}>
              {this.state.showDetails[item.id]
                ? "Hide Details"
                : "View Details"}
            </button>
                </li>
              </ul>
              {this.state.showDetails[item.id] && (
                <div className="description rounded d-flex">
                  <h1>Description</h1>
                  {/* <p>City: {item.phone}</p>
                  <p>State: {item.address.state}</p> */}
                  <ul>
                    <li  className="f">Contact Person</li>
                    <li>{item.name}</li>
                    <li  className="f">Email</li>
                    <li>{item.email}</li>
                    <li  className="f">Phone</li>
                    <li>{item.phone}</li>
                   
                  
                  </ul>
                  <ul>
                    <li  className="f" > Address</li>
                    <li>{item.address.street}</li>
                    <li  className="f">City</li>
                    <li>{item.address.city}</li>
                    <li  className="f">State</li>
                    <li>{item.address.state}</li>
                    <li  className="f">Country</li>
                    <li>{item.address.street}</li>
                  </ul>
                </div>
              )} 
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
