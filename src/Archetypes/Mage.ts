import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _countMage = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    this._countMage += 1;
    return this._countMage;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;