import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _countWarrior = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    this._countWarrior += 1;
    return this._countWarrior;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
