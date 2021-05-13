import * as _ from 'https://deno.land/x/lodash@4.17.15-es/lodash.js';

export function getPlanetData(planets: any) {
  const planetData = planets.map((planet: any) => {
    return _.pick(planet, [
      'kepler_name',
      'koi_prad',
      'koi_smass',
      'koi_srad',
      'koi_count',
      'koi_steff',
    ]);
  });
  return planetData;
}
