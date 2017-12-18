import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Form } from 'semantic-ui-react';
import Mardown from 'react-markdown';

import from 'style.css';

export function MarkdownOutput(props) {
  const { source } = props;

  return (
    <div>
      <Form>
        <Form.Field
          label="Result"
        />
      </Form>
      <div id="markdown">
        <Markdown {...{source}} />
      </div>
    </div>
  );
}

const selector = formValueSelector('markdown');
const mapStateToProps = (state, props) => ({
  source: selector(state, 'source'),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkdownOutput);
