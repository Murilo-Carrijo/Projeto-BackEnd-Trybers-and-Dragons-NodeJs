import Race from './Rece';

class Dwarf extends Race {
  private _lifePoint;
  private static countDwarf = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._lifePoint = 80;
  }

  static createdRacesInstances(): number {
    this.countDwarf += 1;
    return this.countDwarf;
  }

  get maxLifePoints(): number {
    return this._lifePoint;
  }
}

export default Dwarf;
