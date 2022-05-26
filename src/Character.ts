import Archetype, { Mage } from './Archetypes';
import IEnergy from './Energy';
import IFighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements IFighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: IEnergy;
  private _name: string;
  
  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
    this._name = name;
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): IEnergy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  public get name(): string {
    return this._name;
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this.defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  attack(enemy: IFighter) {
    enemy.receiveDamage(this.strength);
  }

  levelUp() {
    const mxPoints = getRandomInt(1, 10) + this._maxLifePoints;
    if (mxPoints >= this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    } else {
      this._maxLifePoints += getRandomInt(1, 10);
    }

    this._lifePoints = this._maxLifePoints;
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);

    this._energy.amount = 10;
  }

  special(enemy: IFighter) {
    if (this._energy.amount === 10) { 
      enemy.receiveDamage(this.strength * 5); 
    }
    if (this._energy.amount < 10 && this._energy.amount > 5) {
      enemy.receiveDamage(this.strength * 2);
    } 
  }
}

export default Character;