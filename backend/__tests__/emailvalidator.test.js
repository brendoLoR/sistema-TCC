const emailvalidator = require('../src/validations/emailvalidator');

describe('email validation test', () => {
    it('should valid an email', () => {
        const s = "email@email.com";
        const c = emailvalidator(s);
        expect(c).not.toBeNull();
        expect(c).toBe("email@email.com");

    }),
    it('shouldnt valid an false email', () => {
        try {
            const s = "emailemail.com";
            const c = emailvalidator(s);
        } catch (e) {            
            expect(e.message).toBe('this Email is invalid');
        }
    }),
    it('shouldnt valid an false email', () => {
        try {
            const s = "email@emailcom";
            const c = emailvalidator(s);
        } catch (e) {            
            expect(e.message).toBe('this Email is invalid');
        }
    }),
    it('shouldnt valid an false email', () => {
        try {
            const s = "email email.com";
            const c = emailvalidator(s);
        } catch (e) {            
            expect(e.message).toBe('this Email is invalid');
        }
    }),
    it('shouldnt valid an false email', () => {
        try {
            const s = "emailemailcom";
            const c = emailvalidator(s);
        } catch (e) {            
            expect(e.message).toBe('this Email is invalid');
        }
    }),
    it('shouldnt valid an false email', () => {
        try {
            const s = "email@emailcom";
            const c = emailvalidator(s);
        } catch (e) {            
            expect(e.message).toBe('this Email is invalid');
        }
    }),
    it('shouldnt valid an false email', () => {
        try {
            const s = " @email.com";
            const c = emailvalidator(s);
        } catch (e) {            
            expect(e.message).toBe('this Email is invalid');
        }
    }),
    it('shouldnt valid an false email', () => {
        try {
            const s = "email@email.";
            const c = emailvalidator(s);
        } catch (e) {            
            expect(e.message).toBe('this Email is invalid');
        }
    }),
    it('shouldnt valid an false email', () => {
        try {
            const s = ".email@email.com";
            const c = emailvalidator(s);
        } catch (e) {            
            expect(e.message).toBe('this Email is invalid');
        }
    }),
    it('shouldnt valid an false email', () => {
        try {
            const s = "email@email. com";
            const c = emailvalidator(s);
        } catch (e) {            
            expect(e.message).toBe('this Email is invalid');
        }
    })
});