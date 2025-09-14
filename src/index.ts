import crypto from 'crypto';

/**
 * Generates a MongoDB ObjectId.
 *
 * The first 4 bytes are a Unix timestamp and the remaining 8 bytes
 * are cryptographically secure random values.
 */
export function genObjectId(): string {
  const timestamp = Math.floor(Date.now() / 1000).toString(16);
  const random = crypto.randomBytes(8).toString('hex');
  return (timestamp + random).toLowerCase();
}

export default genObjectId;
