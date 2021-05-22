import { Heading } from './index';

export default {
  title: 'Typography / Headings',
  component: Heading,
};

export const Default = () => <Heading>Lorem Ipsum Dolor Sit Amet</Heading>;

export const WithDate = () => (
  <Heading date={new Date('January 01 2021')}>
    Lorem Ipsum Dolor Sit Amet
  </Heading>
);
