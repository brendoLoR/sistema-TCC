const cpfvalidator = require('../src/validations/cpfvalidator');

describe('cpf validation test', () => {
    it('should valid an cpf', () => {
        const s = "99438845410";
        const c = cpfvalidator(s);
        expect(c).not.toBeNull();
        expect(c).toBe("994.388.454-10");

    }),
    it('shouldnt valid an false cpf', () => {
        try {
            const s = "99438845411";
            const c = cpfvalidator(s);
        } catch (e) {            
            expect(e.message).toBe('this cpf is invalid');
        }
    })
});