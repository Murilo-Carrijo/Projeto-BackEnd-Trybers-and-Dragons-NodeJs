import Race from './Rece';

class Orc extends Race {
  private _lifePoint;
  private static countOrc = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._lifePoint = 74;
  }

  static createdRacesInstances(): number {
    this.countOrc += 1;
    return this.countOrc;
  }

  get maxLifePoints(): number {
    return this._lifePoint;
  }
}

export default Orc;