import Race from './Rece';

class Elf extends Race {
  private _lifePoint;
  private static countElf = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._lifePoint = 99;
  }

  static createdRacesInstances(): number {
    this.countElf += 1;
    return this.countElf;
  }

  get maxLifePoints(): number {
    return this._lifePoint;
  }
}

export default Elf;