import {
  assert,
  assertEquals,
} from 'https://deno.land/std@0.96.0/testing/asserts.ts';

import { findHabitablePlanets } from './habitable_planets.ts';

const TOO_LARGE_PLANETARY_RADIUS = {
  koi_disposition: 'CONFIRMED',
  koi_prad: '1.5',
  koi_srad: '1',
  koi_smass: '1',
};

const TOO_LARGE_SOLAR_RADIUS = {
  koi_disposition: 'CONFIRMED',
  koi_prad: '1',
  koi_srad: '1.01',
  koi_smass: '1',
};

const TOO_LARGE_SOLAR_MASS = {
  koi_disposition: 'CONFIRMED',
  koi_prad: '1',
  koi_srad: '1',
  koi_smass: '1.04',
};

const NOT_CONFIRMED = {
  koi_disposition: 'FALSE POSITIVE',
};

const HABITABLE_PLANET = {
  koi_disposition: 'CONFIRMED',
  koi_prad: '1',
  koi_srad: '1',
  koi_smass: '1',
};

Deno.test('Sanity Test', () => {
  assert('Hello from Deno Tests');
});

Deno.test('filter only habitable planets', () => {
  const filtered = findHabitablePlanets([
    HABITABLE_PLANET,
    NOT_CONFIRMED,
    TOO_LARGE_PLANETARY_RADIUS,
    TOO_LARGE_SOLAR_RADIUS,
    TOO_LARGE_SOLAR_MASS,
  ]);
  assertEquals(filtered, [HABITABLE_PLANET]);
});
