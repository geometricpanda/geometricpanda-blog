import {JSDOM} from 'jsdom';
import createDOMPurify from 'dompurify';

const win = new JSDOM('').window as unknown as Window;
const DOMPurify = createDOMPurify(win);

export const sanitize = DOMPurify.sanitize
