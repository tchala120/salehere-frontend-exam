import { generatePath } from 'react-router-dom'
import queryString from 'query-string'

type RouteToValue = string | number | boolean | null | undefined

interface RouteToOptions {
  params?: Record<string, RouteToValue>
  query?: Record<string, RouteToValue>
}

export const getSearchParams = () => {
  return new URLSearchParams(window.location.search)
}

export const routeTo = (path: string, options?: RouteToOptions) => {
  const result = generatePath(path, options?.params)

  if (options?.query != null) {
    return `${result}?${queryString.stringify(options?.query)}`
  }

  return result
}
