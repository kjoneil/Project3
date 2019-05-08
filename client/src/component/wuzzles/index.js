import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Comments = () => (
      <div>
        <Form>
        <FormGroup>
          <Label for="exampleText">Let us know how much fun our website is.</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
          <Button>Submit</Button>
        </Form>
       </div> 
      );
      
export {Comments};
   