import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _countRanger = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    this._countRanger += 1;
    return this._countRanger;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;