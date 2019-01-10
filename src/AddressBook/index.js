import React, { Component } from "react";

class Address extends Component {
  constructor() {
    super();

    this.state = {
      address: [
        {
          nation: "Indonesia",
          province: "DKI Jakarta",
          city: "South-Jakarta"
        },
        {
          nation: "Indonesia",
          province: "DKI Jakarta",
          city: "North-Jakarta"
        }
      ]
    };
  }

  handleAddressInput = event => {
    this.setState({ nation: event.target.value }),
      this.setState({ province: event.target.value }),
      this.setState({ city: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Address Book</h1>
        <form>
          <input
            type="text"
            placeholder="Country"
            onChange={this.handleAddressInput}
            value={this.state.address[0]}
          />
          <input
            type="text"
            placeholder="Province"
            onChange={this.handleAddressInput}
            value={this.state.address[1]}
          />
          <input
            type="text"
            placeholder="City"
            onChange={this.handleAddressInput}
            value={this.state.address[2]}
          />
        </form>
      </div>
    );
  }
}

export default Address;
