export interface StoryblokLink {
  id: number,
  slug: string,
  name: string,
  is_folder: boolean,
  parent_id: number,
  published: boolean,
  path: string
  position: number;
  uuid: string;
  is_startpage: boolean;
  real_path: string;
}

export enum Color {
  BLACK = 'black',
  GREY = 'grey',
  DARK_BLUE = 'dark-blue',
  DARK_TEAL = 'dark-teal',
  DARK_MAGENTA = 'dark-magenta'
}
