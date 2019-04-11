import config from '../config'

// FIXME: we've got this type duplicated in auth.saga.tsx
import { LocalStorageCredentials } from '../types/auth/localStorageCredentials.type'

export class RequestError extends Error {
  name = 'API Request Error'
  response: Response

  constructor(response: any) {
    super()
    this.response = response
  }
}

/* tslint:disable no-any no-console */
function handleGeneralError(response: Response, error: any) {
  console.groupCollapsed('Fetch error ', response.url)
  console.log(response)
  console.error(error)
  console.groupEnd()
}
/* tslint:enable no-any no-console */

function isErrorCode(statusCode: number) {
  return String(statusCode).match(/4\d\d/) || String(statusCode).match(/5\d\d/)
}

/*
 * Get oauth credentials from local storage
 */
function getApiAccessToken() {
  try {
    const credentials: LocalStorageCredentials = JSON.parse(
      localStorage.getItem(config.localStorageKeys.userCredentials)
    )

    return credentials.accessToken
  } catch (error) {
    console.error(error)
    throw Error(error)
  }
}

export async function get(url: string, options?: RequestInit) {
  const response = await fetch(`${config.url.api}${url}`, {
    headers: new Headers({
      Authorization: `Bearer ${getApiAccessToken()}`
    }),
    ...options,
    method: 'GET'
  })

  if (isErrorCode(response.status)) {
    const error = await response.json()
    throw new RequestError(error)
  }

  try {
    return await response.json()
  } catch (error) {
    handleGeneralError(response, error)
  }
}

export async function postWithoutAuth(
  url: string,
  data?: object,
  options?: RequestInit
) {
  const response = await fetch(`${config.url.api}${url}`, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    ...options,
    method: 'POST',
    body: JSON.stringify(data)
  })

  if (isErrorCode(response.status)) {
    const error = await response.json()
    throw new RequestError(error)
  }

  try {
    return await response.json()
  } catch (error) {
    handleGeneralError(response, error)
  }
}

export async function post(url: string, data?: object, options?: RequestInit) {
  const response = await fetch(`${config.url.api}${url}`, {
    headers: new Headers({
      Authorization: `Bearer ${getApiAccessToken()}`,
      'Content-Type': 'application/json'
    }),
    ...options,
    method: 'POST',
    body: JSON.stringify(data)
  })

  if (isErrorCode(response.status)) {
    const error = await response.json()
    throw new RequestError(error)
  }

  try {
    return await response.json()
  } catch (error) {
    handleGeneralError(response, error)
  }
}

export async function put(url: string, data?: object, options?: RequestInit) {
  const response = await fetch(`${config.url.api}${url}`, {
    headers: new Headers({
      Authorization: `Bearer ${getApiAccessToken()}`,
      'Content-Type': 'application/json'
    }),
    ...options,
    method: 'PUT',
    body: JSON.stringify(data)
  })

  if (isErrorCode(response.status)) {
    const error = await response.json()
    throw new RequestError(error)
  }

  try {
    return await response.json()
  } catch (error) {
    handleGeneralError(response, error)
  }
}

export async function deleter(
  url: string,
  data?: object,
  options?: RequestInit
) {
  const response = await fetch(`${config.url.api}${url}`, {
    headers: new Headers({
      Authorization: `Bearer ${getApiAccessToken()}`,
      'Content-Type': 'application/json'
    }),
    ...options,
    method: 'DELETE',
    body: JSON.stringify(data)
  })

  if (isErrorCode(response.status)) {
    const error = await response.json()
    throw new RequestError(error)
  }

  try {
    return await response.json()
  } catch (error) {
    handleGeneralError(response, error)
  }
}
