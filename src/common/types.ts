// This is for cards
export interface DetailRow {
  icon: string
  title: string
  content1?: string
  content2?: string
}

export interface TravelCard {
  icon: string
  title: string
  content: string
  url: string
}

export interface RegistryCard {
  image: string
  title: string
  content: string
}

export interface ScheduleInfo {
  event: string
  time: string
  additional?: string
}
