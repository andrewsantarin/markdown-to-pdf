import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';

import Settings from '../settings/Settings';
import MarkdownInput from '../markdown/MarkdownInput';
import MarkdownOutput from '../markdown/MarkdownOutput';

const { Row, Column } = Grid;

export default function App(props) {
  return (
    <Container>
      <Grid>
        <Row>
          <Column width={6}>
            <MarkdownInput />
          </Column>
      
          <Column width={4}>
            <Settings />
          </Column>
      
          <Column width={6}>
            <MarkdownOutput />
          </Column>
        </Row>
      </Grid>
    </Container>
  );
}
