import { ReactNode } from "react";

export interface IVehicleProvidersProps{
    children: ReactNode
}

export interface IVehicle {
    id: string;
    title: string;
    year: string;
    mileage: string;
    price: string;
    description: string;
    type: string;
    urlImage: string;
    createdAt: Date;
  }