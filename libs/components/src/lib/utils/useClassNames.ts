import { useEffect, useState } from 'react';
import classNames, { Argument } from 'classnames';

export const useClassNames = (
  cssObject: Argument[],
  dependencies: Array<unknown>
) => {
  const [cssClassNames, setCssClassNames] = useState<string>('');

  useEffect(() => {
    setCssClassNames(classNames(cssObject));
  }, [cssObject, dependencies]);

  return cssClassNames;
};
