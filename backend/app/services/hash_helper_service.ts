import env from '#start/env'
import crypto from 'node:crypto'

export class HashHelperService {
  /**
   * Generate a signed URL with expiration
   */
  public generateSignedUrl(route: string, userId: number, email: string, expiresInMinutes: number) {
    const expires = Math.floor(Date.now() / 1000) + expiresInMinutes * 60 // Timestamp in seconds
    const hash = HashHelperService.createHash(userId, email, expires) // Hash includes expires

    // Create HMAC signature for full protection
    const signature = HashHelperService.createSignature(userId, hash, expires)

    // Generate URL in Laravel format
    return `${env.get('APP_URL')}${route}/${userId}/${hash}?expires=${expires}&signature=${signature}`
  }
  public generateSignedUrlPasswordReset(
    route: string,
    userId: number,
    email: string,
    expiresInMinutes: number
  ) {
    const expires = Math.floor(Date.now() / 1000) + expiresInMinutes * 60 // Timestamp in seconds
    const hash = HashHelperService.createHash(userId, email, expires) // Hash includes expires

    // Create HMAC signature for full protection
    const signature = HashHelperService.createSignature(userId, hash, expires)

    // Generate URL in Laravel format
    return {
      expires,
      link: `${env.get('APP_URL')}${route}/${userId}/${hash}?expires=${expires}&signature=${signature}`,
    }
  }
  /**
   * Create hash using user's email + expiration timestamp
   */
  private static createHash(userId: number, email: string, expires: number) {
    const secretKey = env.get('APP_KEY') // Secure key
    return crypto
      .createHmac('sha256', secretKey)
      .update(`${userId}:${email}:${expires}`)
      .digest('hex')
  }

  /**
   * Create HMAC signature for entire URL validation
   */
  private static createSignature(userId: number, hash: string, expires: number) {
    const secretKey = env.get('APP_KEY') // Secure key
    return crypto
      .createHmac('sha256', secretKey)
      .update(`${userId}:${hash}:${expires}`)
      .digest('hex')
  }

  /**
   * Validate the signed URL
   */
  public validateSignedUrl(
    userId: number,
    email: string,
    expires: number,
    hash: string,
    signature: string
  ) {
    if (Math.floor(Date.now() / 1000) > expires) return false // Expired

    const expectedHash = HashHelperService.createHash(userId, email, expires)
    if (hash !== expectedHash) return false // Prevent tampering with email/expires

    const expectedSignature = HashHelperService.createSignature(userId, hash, expires)
    return signature === expectedSignature // Final check
  }
}
