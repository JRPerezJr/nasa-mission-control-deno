import { join } from 'https://deno.land/std/path/mod.ts';
import { BufReader } from 'https://deno.land/std/io/bufio.ts';
import { parse } from 'https://deno.land/std/encoding/csv.ts';
import { findHabitablePlanets } from './habitable_planets.ts';
import { getPlanetData } from './habitable_planet_data.ts';

type Planet = Record<string, string>;

let planets: Array<Planet>;

async function loadPlanetsData() {
  const path = join('data', 'kepler_exoplanets_data.csv');

  const file = await Deno.open(path);
  const bufReader = new BufReader(file);
  const result = await parse(bufReader, {
    skipFirstRow: true,
    comment: '#',
  });
  Deno.close(file.rid);

  const habitablePlanets = findHabitablePlanets(result);

  return getPlanetData(habitablePlanets);
}
planets = await loadPlanetsData();

console.log(`${planets.length} habitable planets found !`);

export function getAllPlanets() {
  return planets;
}
