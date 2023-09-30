export type UnitType = {
  type: string,
  label: string,
  description?: string,
  goldCost: number;
  numberOfTurns: number;
}

export const Units: UnitType[] = [
  {
    "type": "settler",
    "description": "",
    "label": "Settler",
    "goldCost": 200,
    "numberOfTurns": 1
  },{
    "type": "builder",
    "label": "Can build and gather resources",
    "description": "",
    "goldCost": 200,
    "numberOfTurns": 1
  },{
    "type": "warrior",
    "label": "Warrior",
    "description": "Basic combat unit",
    "goldCost": 200,
    "numberOfTurns": 1
  },{
    "type": "archer",
    "label": "Archer",
    "goldCost": 200,
    "numberOfTurns": 1
  },{
    "type": "swordsman",
    "label": "Swordsman",
    "goldCost": 200,
    "numberOfTurns": 1
  },{
    "type": "crossbowman",
    "label": "Crossbowman",
    "goldCost": 200,
    "numberOfTurns": 1
  },{
    "type": "musketman",
    "label": "Musketman",
    "goldCost": 200,
    "numberOfTurns": 1
  },{
    "type": "rifleman",
    "label": "Rifleman",
    "goldCost": 200,
    "numberOfTurns": 1
  },{
    "type": "tank",
    "label": "Tank",
    "goldCost": 200,
    "numberOfTurns": 1
  }
]
