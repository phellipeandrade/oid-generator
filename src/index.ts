import clipboardy from 'clipboardy';

export function genObjectId(): string {
  const timestamp = Math.floor(Date.now() / 1000).toString(16);
  return (
    timestamp +
    'xxxxxxxxxxxxxxxx'.replace(/x/g, () => ((Math.random() * 16) | 0).toString(16)).toLowerCase()
  );
}

const generatedObjectId = genObjectId();
clipboardy.writeSync(generatedObjectId);
console.log(`${generatedObjectId} was copied to the clipboard!`);
