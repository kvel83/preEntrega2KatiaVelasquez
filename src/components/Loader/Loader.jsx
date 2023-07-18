import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

class Loader extends Component {
  render() {
    return (
      <Spinner
        size="lg"
        color="#826db3"
        variant="grow"
        className="mt-5"
      />
    );
  }
}

export default Loader;