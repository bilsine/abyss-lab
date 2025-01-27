import { SourceData } from './sources'

export interface WeaponSkill {
  name: string
  krName?: string
  description: string
  krDescription?: string
}

export interface WeaponData {
  id: string
  name: string
  krName?: string
  atk: number
  crt: number
  category:
    | 'pistol'
    | 'cannon'
    | 'katana'
    | 'cross'
    | 'greatsword'
    | 'scythe'
    | 'lance'
    | 'gauntlet'
    | 'bow'
    | 'chakram'
  rarity: number
  skills: WeaponSkill[]
  version?: string
  battlesuits?: {
    id: string
    suitability?: number
    description?: string
    descriptionKr?: string
  }[]
  priWeapon?: string
  originalWeapons?: string[]
  sources?: SourceData[]
}
