export interface Day {
  isFreeDay: boolean
  isSelected: boolean
  date: Date;
}

export interface Month {
  days: Day[];
  number: number;
  name: string;
}
