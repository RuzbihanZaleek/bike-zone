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

export interface FilterProps {
  manufacturer: string;
  year: number;
  starter: string;
  offset: number;
  model: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNextPageExist: boolean;
}
