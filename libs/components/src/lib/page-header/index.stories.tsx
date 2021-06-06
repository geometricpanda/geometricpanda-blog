import { PageHeader } from './index';

export default {
  title: 'Typography / Page Header',
  component: PageHeader,
};

export const Default = () => (
  <PageHeader>Lorem Ipsum Dolor Sit Amet</PageHeader>
);

export const WithDate = () => (
  <PageHeader date={new Date('January 01 2021')}>
    Lorem Ipsum Dolor Sit Amet
  </PageHeader>
);
