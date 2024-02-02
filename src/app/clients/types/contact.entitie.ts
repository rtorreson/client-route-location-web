export type Contact = {
  readonly id?: number;
  name: string;
  email: string;
  cellphone: string;
  coordinates: Coordinates;
  distance?: string
};

export type Coordinates = {
  x: number;
  y: number;
};
