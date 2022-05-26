import IEnergy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: IEnergy;
  attack(enemy: Fighter): void;
  special(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}

export default Fighter;