import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Axios from 'axios';
import "./styles.css";

class Comments extends React.Component {
state =  {
  comment: ''
}

handleTyping =  (event) => {
  event.preventDefault()
this.setState({comment: event.target.value})
}

saveComment = () => {

  Axios.post('/saveComment', {comment: this.state.comment}).then((data) => {
console.log('we got this back from backedn!!', data);
  })

}

render () {

  console.log('comment state changing!!!', this.state);

  return (
      <div>
        <Form>
        <FormGroup>
          <Label for="exampleText">Provide Feedback.</Label>
          <Input type="textarea" name="text" id="exampleText" onChange={this.handleTyping} />
        </FormGroup>
          {/* <Button>Submit</Button> */}
        </Form>

        <button onClick={this.saveComment} >Save</button>
       </div> 
      );
  }
}
      
export default Comments;
   
