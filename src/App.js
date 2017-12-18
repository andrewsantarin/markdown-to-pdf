import React, { Component } from 'react';
import Markdown from 'react-markdown';
import Textarea from 'react-autosize-textarea';
import html2pdf from 'html2pdf.js';
import { Grid, Container, Button, Form } from 'semantic-ui-react';

const { desc: value } = CARD;
const { Row, Column } = Grid;

class App extends Component {
  state = {
    value,
    filename: 'print.pdf'
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState((prevState, props) => ({
      value,
    }));
  }

  handleFilenameChange = (event) => {
    const { value: filename } = event.target;
    this.setState((prevState, props) => ({
      filename,
    }));
  }

  handleClick = (event) => {
    html2pdf(this.refs.markdown, {
      margin: [ 1, 1, 1, 1 ],
      filename: this.state.filename,
      image: {
        type: 'png',
        quality: 1
      },
      jsPDF: {
        orientation: 'portrait',
        format: 'a4',
      }
    });
  }

  render() {
    const { value, filename } = this.state;

    return (
      <Container>
        <Grid>
          <Row>
            <Column width={6}>
              <Form as="div">
                <Form.Field
                  label="Copy or type your description here:"
                  control={Textarea}
                  {...{value}}
                  onChange={this.handleChange}
                />
              </Form>
            </Column>
        
            <Column width={4}>
              <Grid textAlign="center">
                <Row>
                  <Column width={6}></Column>
                  <Column width={4}>text</Column>
                  <Column width={6}></Column>
                </Row>
                <Row>
                  <Column width={4}>text</Column>
                  <Column width={8}>Margins</Column>
                  <Column width={4}>text</Column>
                </Row>
                <Row>
                  <Column width={6}></Column>
                  <Column width={4}>text</Column>
                  <Column width={6}></Column>
                </Row>
              </Grid>

              <Form as="div">
                <Form.Input
                  label="Filename:"
                  value={filename}
                  onChange={this.handleFilenameChange}
                />
              </Form>

              <Button
                fluid
                icon="file pdf outline"
                content="Convert to PDF"
                onClick={this.handleClick}
              />
            </Column>
        
            <Column width={6}>
              <Form>
                <Form.Field
                  label="Result"
                />
              </Form>
              <div ref="markdown">
                <Markdown source={value} />
              </div>
            </Column>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
