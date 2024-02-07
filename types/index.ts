import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  isDisabled?: boolean;
  textStyles?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface BikeProps {
  make: string;
  model: string;
  year: string;
  type: string;
  engine: string;
  cooling: string;
  power: string;
  fuel_system: string;
  gearbox: string;
  fuel_capacity: string;
  starter: string;
}

export interface BikeDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  bike: BikeProps;
}
