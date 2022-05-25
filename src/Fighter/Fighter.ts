import IEnergy from '../Energy';

interface IFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: IEnergy;
  attack(enemy: IFighter): void;
  special(enemy: IFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}

export default IFighter;