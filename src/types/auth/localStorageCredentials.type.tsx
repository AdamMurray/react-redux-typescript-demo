export interface LocalStorageCredentials {
  accessToken: string
  created?: number
  expiresIn: number
  refreshToken: string
  scope: string | null
  tokenType: string
}
