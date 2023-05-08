export function validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return emailRegex.test(email);
}