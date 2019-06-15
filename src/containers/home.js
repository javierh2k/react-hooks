import React from 'react';
import {
  Card,
  CardBlock,
  H3,
  Small,
  A,
  Strong,
  Badge,
  Code,
  Button,
  Alert,
  Container,
} from '@bootstrap-styled/v4';
import PropTypes from 'prop-types';

/**
 * @public
 * @description The <BootstrapProvider> accept theme and can inject global css utilities
 * @param {object} props - instance props
 * @param {string} props.title - A title
 * @param {string} props.name - A name
 * @param {object} props.theme - A theme object, see https://bootstrap-styled.github.io for more details
 * @returns {component} - bootstrap application example
 */
const About = ({ title, name }) => (
  <Card>
    <CardBlock>
      <H3 className="d-inline">
        Hello <Small>{title}</Small> <Strong>{name}</Strong>, <A>you</A>, can
        add <Code>1</Code> to
      </H3>{' '}
      <Badge color="danger" pill>
        <H3>$4</H3>
      </Badge>{' '}
      <Strong>by</Strong> pressing,
      <Button>here</Button>. This
      <Code>
        <Strong>module</Strong>
      </Code>{' '}
      is a basic example with a custom Bootstrap Styled theme.
      <Alert color="success" className="mt-2" uncontrolled>
        We won\'t tell anyone'}, now click on
        <Code>
          <Strong>VIEW CODE</Strong>
        </Code>{' '}
        button to learn how it work
      </Alert>
      <Alert color="warning" className="mt-2">
        Do you know the{' '}
        <Code>
          <Strong>Code snippet</Strong>
        </Code>{' '}
        can be edited in live?
      </Alert>
    </CardBlock>
  </Card>
);

About.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

// Create the example
const Home = () => <About title="young" name="padawan" />;

export default Home;
