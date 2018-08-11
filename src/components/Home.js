import React from "react";

class Home extends React.Component {
  componentWillUnmount() {
    console.log('Chato, que me borras!!!');
  }
  
  render() {
    return (
      <h1 className="app__title">Home</h1>
    );
  }

  componentDidMount() {
    console.log('Oye, ya me he pintado');
  }
}

export default Home;