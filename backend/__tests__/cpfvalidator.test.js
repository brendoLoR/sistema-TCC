const cpfvalidator = require('../src/validations/cpfvalidator');

describe('cpf validation test', () => {
    it('should valid an cpf', () => {
        const s = "99438845410";
        const c = cpfvalidator(s);
        expect(c).not.toBeNull();
        expect(c).toBe("994.388.454-10");

    }),
    it('shouldn´t valid an false cpf', () => {
        const s = "99438845411";
        const c = cpfvalidator(s);
        expect(c).not.toBeNull();
        expect(c).toBe(false);
    })
});