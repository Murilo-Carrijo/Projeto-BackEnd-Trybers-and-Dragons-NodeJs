import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _countNecromancer = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    this._countNecromancer += 1;
    return this._countNecromancer;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;