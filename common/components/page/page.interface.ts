import type {IconProp} from '@fortawesome/fontawesome-svg-core';

export interface ILink {
  href: string;
  text: string;
  icon: IconProp;
  active: boolean;
}
