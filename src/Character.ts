import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;
  
  constructor(name: string) {
    this._name = name;
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = Math.floor(this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  get name(): string {
    return this._name;
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this.defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this.strength);
  }

  levelUp() {
    const mxPoints = this._maxLifePoints + getRandomInt(1, 10);
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

  special(enemy: Fighter) {
    if (this._energy.amount === 10) { 
      enemy.receiveDamage(this.strength * 5); 
    }
    if (this._energy.amount < 10 && this._energy.amount > 5) {
      enemy.receiveDamage(this.strength * 2);
    } 
  }
}

export default Character;