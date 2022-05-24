import Race from './Rece';

class Halfling extends Race {
  private _lifePoint;
  private static countHalfling = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._lifePoint = 60;
  }

  static createdRacesInstances(): number {
    this.countHalfling += 1;
    return this.countHalfling;
  }

  get maxLifePoints(): number {
    return this._lifePoint;
  }
}

export default Halfling;