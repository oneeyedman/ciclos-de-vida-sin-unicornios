import React from "react";

class Home extends React.Component {
  componentWillUnmount() {
    console.log('Chato, que me borras!!!');
  }
  
  render() {
    return (
      <p>Home</p>
    );
  }

  componentDidMount() {
    console.log('Oye, ya me he pintado');
  }
}

export default Home;