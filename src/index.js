import clipboardy from 'clipboardy';

const genObjectId = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
    return ((Math.random() * 16) | 0).toString(16);
  }).toLowerCase()
  );
};

const generatedObjectId = genObjectId();

clipboardy.writeSync(generatedObjectId);

console.log(`${generatedObjectId} was copied to the clipboard!`);
