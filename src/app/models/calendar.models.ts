export interface Day {
  isFreeDay: boolean
  isSelected: boolean
  date: Date
  freeDayTitle?: string
}

export interface Month {
  days: Day[];
  number: number;
  name: string;
  holidays: number;
}

export interface Holiday {
  date: String;
  name: String;
}

export interface FeiertageResponse {
  status: string
  feiertage: Feiertage[]
}

export interface Feiertage {
  date: string
  fname: string
  all_states: string
  bw: string
  by: string
  be: string
  bb: string
  hb: string
  hh: string
  he: string
  mv: string
  ni: string
  nw: string
  rp: string
  sl: string
  sn: string
  st: string
  sh: string
  th: string
  comment: string
}
