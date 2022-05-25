type EnergyType = 'mana' | 'stamina'; 

interface IEnergy {
  type_: EnergyType;
  amount: number;
}

export {
  EnergyType,
};

export default IEnergy;