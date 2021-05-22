import { ButtonLink } from './index';

export default {
  title: 'Interactive / Button Links',
  component: ButtonLink,
};

export const Primary = () => <ButtonLink href={'#'}>Hello World</ButtonLink>;

export const Secondary = () => (
  <ButtonLink href={'#'} secondary>
    Hello World
  </ButtonLink>
);
