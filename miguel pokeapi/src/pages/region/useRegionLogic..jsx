import { useEffect } from "react";
export const useRegionLogic = () => {
  const regions = [
    "kanto",
    "johto",
    "hoenn",
    "sinnoh",
    "unova",
    "kalos",
    "alola",
    "galar",
    "hisui",
    "paldea",
  ];

  return {
    regions,
  };
};
