import { Persona } from './persona';

describe('Persona', () => {
  it('should create an instance', () => {
    expect(new Persona(1, 'Andrea', 'Trentini', 'M')).toBeTruthy();
  });
});
