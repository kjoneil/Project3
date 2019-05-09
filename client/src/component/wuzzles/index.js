import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Axios from "axios";
const myStyle = {
  containerStyle: {
    width: "50%",
    margin: "auto",
    padding: "20 px"
  }
};
class Comments extends React.Component {
  state = {
    comment: ""
  };

  handleTyping = event => {
    event.preventDefault();
    this.setState({ comment: event.target.value });
  };

  saveComment = () => {
    Axios.post("http://localhost:3001/saveComment", {
      comment: this.state.comment
    }).then(data => {
      console.log("we got this back from backedn!!", data);
    });
  };

  render() {
    console.log("comment state changing!!!", this.state);

    return (
      <div style={myStyle.containerStyle} className="form">
        <Form>
          <FormGroup>
            <Label for="exampleText">Let us how fun our website is.</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              onChange={this.handleTyping}
            />
          </FormGroup>
          {/* <Button>Submit</Button> */}
        </Form>

        <button onClick={this.saveComment}>Save</button>
      </div>
    );
  }
}

export default Comments;
