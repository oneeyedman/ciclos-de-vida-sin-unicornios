import React from "react";
import './Editor.css'

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.editorField = React.createRef();
  }

  componentWillUnmount() {
    const content = this.editorField.current.value;
    this.props.saveMe(content);
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="app__title">Editor</h1>
        <textarea className="form__field form__field--textarea" defaultValue={this.props.miTexto} ref={this.editorField}></textarea>
      </React.Fragment>
    );
  }
}

export default Editor;