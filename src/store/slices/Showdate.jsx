import { Chance } from "chance";

let chance = Chance();

export const FakeData = () => {
  return chance.name({ middle: true });
};
