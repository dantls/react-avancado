export interface IFuel {
  id: number;
  name: string;
  price: number;
}

export type IFuelState = IFuel & {
  updated: boolean;
}


export interface FuelComponentProps {
  editMode: boolean;
  toggleEditMode: () => void;
}



















// export type FuelState = IFuel & {
//   updated: boolean;
// }