export const emailSelector = state => state.login.email;
export const passwordSelector = state => state.login.password;
export const rememberMeSelector = state => state.login.rememberMe;
export const captchaRequiredSelector = state => state.login.captchaRequired;
export const captchaUrlSelector = state => state.login.captchaUrl;
export const captchaSelector = state => state.login.captcha;
export const errorMessageSelector = state => state.login.errorMessage;
export const statusSelector = state => state.login.status;
export const userIdSelector = state => state.login.userId;
export const authSelector = state => state.auth.isAuth;

