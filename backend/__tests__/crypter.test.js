const crypter = require('../src/cryoto/crypter');

describe('encrypting test', () => {
    it('should encrypt a string', () => {
        const s = 'texto';
        const c = crypter(s);
        expect(c).not.toBeNull();
        expect(c).toBeDefined();

    })
});