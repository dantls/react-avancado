import { api } from "../../services/api";
import { IFuel } from "./types";

export async function getFuel(){

  const request = await api.get('fuel');

  return request.data;
  
}
export async function updatedFuel(fuel: IFuel){

  const request = await api.put(`fuel/${fuel.id}`, fuel);

  return request.data;
  
}























// export async function updatedFuel(fuel: IFuel){

//   const request = await api.put(`fuel/${fuel.id}`, fuel);

//   return request.data;
  
// }