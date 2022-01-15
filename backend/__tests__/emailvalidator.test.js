const emailvalidator = require('../src/validations/emailvalidator');

describe('email validation test', () => {
    it('should valid an email', () => {
        const s = "email@email.com";
        const c = emailvalidator(s);
        expect(c).not.toBeNull();
        expect(c).toBe("email@email.com");
    }),
    it('shouldn´t valid an false email', () => {
        const s = "emailemail.com";
        const c = emailvalidator(s);
        // expect(c).not.toBeNull();
        expect(c).toBe(false);
    }),
    it('shouldn´t valid an false email', () => {
        const s = "email@emailcom";
        const c = emailvalidator(s);
        // expect(c).not.toBeNull();
        expect(c).toBe(false);
    }),
    it('shouldn´t valid an false email', () => {
        const s = "@emailemail.com";
        const c = emailvalidator(s);
        // expect(c).not.toBeNull();
        expect(c).toBe(false);
    }),
    it('shouldn´t valid an false email', () => {
        const s = "@emailemailcom";
        const c = emailvalidator(s);
        // expect(c).not.toBeNull();
        expect(c).toBe(false);
    }),
    it('shouldn´t valid an false email', () => {
        const s = ".com";
        const c = emailvalidator(s);
        // expect(c).not.toBeNull();
        expect(c).toBe(false);
    }),
    it('shouldn´t valid an false email', () => {
        const s = "emailemail";
        const c = emailvalidator(s);
        // expect(c).not.toBeNull();
        expect(c).toBe(false);
    }),
    it('shouldn´t valid an false email', () => {
        const s = "";
        const c = emailvalidator(s);
        // expect(c).not.toBeNull();
        expect(c).toBe(false);
    }),
    it('shouldn´t valid an false email', () => {
        const s = "email@ email.com";
        const c = emailvalidator(s);
        // expect(c).not.toBeNull();
        expect(c).toBe(false);
    }),
    it('shouldn´t valid an false email', () => {
        const s = "email@email. com";
        const c = emailvalidator(s);
        // expect(c).not.toBeNull();
        expect(c).toBe(false);
    }),
    it('shouldn´t valid an false email', () => {
        const s = "email@email .com";
        const c = emailvalidator(s);
        // expect(c).not.toBeNull();
        expect(c).toBe(false);
    })
});