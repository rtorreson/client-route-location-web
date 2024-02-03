export type Contact = {
  readonly id?: number;
  name: string;
  email: string;
  cellphone: string;
  coordinates: Coordinates;
  distance?: string
  coordinate_x?: number;
  coordinate_y?: number;
};

type Coordinates = {
  x: number;
  y: number;
};
