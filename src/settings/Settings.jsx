import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Grid, Container, Button, Form } from 'semantic-ui-react';
import InputRange from 'react-input-range';

import { exportHtmlToPdf } from './actions';
import { PAGE_FORMATS, IMAGE_TYPES } from './constants';

const { Row, Column } = Grid;

export default function Settings(props) {
  const { error, handleSubmit, pristine, reset, submitting } = props;

  return (
    <Form onSubmit={handleSubmit(exportHtmlToPdf)}>
      <Grid textAlign="center">
        <Row>
          <Column width={6}></Column>
          <Column width={4}>
            <Form as="div">
              <Field
                label="Top:"
                name="margin.top"
                type="number"
                component={Form.Input}
              />
            </Form>
          </Column>
          <Column width={6}></Column>
        </Row>
        <Row>
          <Column width={4}>
            <Form as="div">
              <Field
                label="Left:"
                name="margin.left"
                type="number"
                component={Form.Input}
              />
            </Form>
          </Column>
          <Column width={8}>Margins</Column>
          <Column width={4}>
            <Form as="div">
              <Field
                label="Right:"
                name="margin.right"
                type="number"
                component={Form.Input}
              />
            </Form>
          </Column>
        </Row>
        <Row>
          <Column width={6}></Column>
          <Column width={4}>
            <Form as="div">
              <Field
                label="Bottom:"
                name="margin.bottom"
                type="number"
                component={Form.Input}
              />
            </Form>
          </Column>
          <Column width={6}></Column>
        </Row>
      </Grid>

      <hr />

      <Field
        label="Image Type:"
        name="image.type"
        options={Object.keys(IMAGE_TYPES).map((key) => ({
          key,
          value: key,
          label: IMAGE_TYPES[key],
        }))}
        component={({ onChange, ...props }) => (
          <Form.Field
            {...props}
            onchange={(event, data) => onChange(data.value)}
          />
        )}
        control={Dropdown}
      />

      <Field
        label="Image Quality:"
        name="image.quality"
        minValue={0}
        maxValue={100}
        component={Form.Field}
        control={InputRange}
      />

      <Field
        label="Save as filename:"
        name="filename"
        component={Form.Input}
      />

      <Button
        fluid
        primary
        type="submit"
        icon="file pdf outline"
        content="Convert to PDF"
      />
    </Form>
  );
}

const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = { exportHtmlToPdf };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm(
    form: 'settings',
  )(Settings)
);
