import React, { Component } from "react";

import axios from "axios";

class JSON_data extends Component {
  componentDidMount = () => {
    axios
      .get(
        `https://raw.githubusercontent.com/jdolan/quetoo/master/src/cgame/default/ui/settings/SystemViewController.json`
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return <div>JSON Data</div>;
  }
}

export default JSON_data;
