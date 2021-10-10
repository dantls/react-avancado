export interface IFuel {
  id: number;
  name: string;
  price: number;
}
export interface FuelComponentProps {
  editMode: boolean;
  toggleEditMode: () => void;
}