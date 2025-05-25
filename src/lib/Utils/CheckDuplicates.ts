import type { IGenre } from "$lib/GenreData/GenreData";

export function findRepeatingElements(arr: IGenre[]) {
    const seen: {[key:string]: boolean} = {};
    const duplicates = [];
  
    for (const element of arr) {
      if (seen[element.id]) {
        duplicates.push(element.id);
      } else {
        seen[element.id] = true;
      }
    }
  
    return duplicates;
  }
