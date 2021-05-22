import { Button } from './index';

export default {
  title: 'Interactive / Buttons',
  component: Button,
};

export const Primary = () => <Button>Hello World</Button>;

export const Secondary = () => <Button secondary>Hello World</Button>;
