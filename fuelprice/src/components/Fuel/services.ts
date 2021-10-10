import { api } from "../../services/api";

export async function getFuel(){

  const request = await api.get('fuel');

  return request.data;
  
}