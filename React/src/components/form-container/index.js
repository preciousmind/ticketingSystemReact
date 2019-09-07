import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label >Email</Label>
                    <Input type="email" name="email"placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" name="password" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label>Select</Label>
                    <Input type="select" name="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Select Multiple</Label>
                    <Input type="select" name="selectMulti"multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Text Area</Label>
                    <Input type="textarea" name="text"/>
                </FormGroup>
                <FormGroup>
                    <Label>File</Label>
                    <Input type="file" name="file"/>
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
          </FormText>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio"/>{' '}
                            Option one is this and that—be sure to include why it's great
            </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio"/>{' '}
                            Option two can be something else and selecting it will deselect option one
            </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" disabled />{' '}
                            Option three is disabled
            </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Check me out
          </Label>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}