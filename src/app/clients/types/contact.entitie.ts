export type Contact = {
  readonly id?: number;
  name: string;
  email: string;
  cellphone: string;
  coordinates: Coordinates;
};

export type Coordinates = {
  x: number;
  y: number;
};
