import React from 'react';
import { reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';
import Textarea from 'react-autosize-textarea';

export default function MarkdownInput(props) {
  return (
    <Form as="div">
      <Field
        label="Copy or type your description here:"
        name="source"
        component={Form.Field}
        control={Textarea}
      />
    </Form>
  );
}

export default reduxForm({
  form: 'markdown',
})(MarkdownInput);
