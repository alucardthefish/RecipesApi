import { Operaciones } from './operaciones';

describe("Test for operations", () => {
  describe("Test for adding-up and subtracting", () => {
    it("Sum up 2 numbers", () => {
      let operaciones = new Operaciones();
      expect(operaciones.sumar(3, 5)).toEqual(8);
    });
    it("Subtract 2 numbers", () => {
      let operaciones = new Operaciones();
      expect(operaciones.restar(9, 5)).toEqual(4);
    });
  });
});

describe('Operaciones', () => {
  it('should create an instance', () => {
    expect(new Operaciones()).toBeTruthy();
  });
});
