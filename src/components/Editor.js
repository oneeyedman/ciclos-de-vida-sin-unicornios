import React from "react";
import './Editor.css'

class Editor extends React.Component {
  componentWillUnmount() {
    this.props.saveMe();
  }
  render() {
    return (
      <React.Fragment>
        <p>Editor</p>
        <textarea className="form__field form__field--textarea" defaultValue={this.props.miTexto}></textarea>
      </React.Fragment>
    );
  }
}

export default Editor;