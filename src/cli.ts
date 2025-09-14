import clipboardy from 'clipboardy';
import { genObjectId } from './index';

const generatedObjectId = genObjectId();
clipboardy.writeSync(generatedObjectId);
console.log(`${generatedObjectId} was copied to the clipboard!`);
