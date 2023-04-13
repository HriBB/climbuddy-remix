export enum ItemName {
  Circle = 'Circle',
  Path = 'Path',
}

export type Point = {
  x: number
  y: number
}

export type Segment = {
  handleIn: Point
  handleOut: Point
  point: Point
}

export type Item = {
  id: string
  type: string
  pathData?: string
  segments?: Segment[]
}

export type ItemData = {
  id?: string
  type?: string
  pathData?: string
  segments?: Segment[]
}

export type ImageData = {
  [routeId: string]: Item[]
}
