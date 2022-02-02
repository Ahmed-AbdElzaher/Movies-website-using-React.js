export const validUsername = new RegExp('^(?=[a-zA-Z0-9.]{8,20}$)(?!.*[.]{2})[^.].*[^.]$');
export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validPassword = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&]).{8,32}$");
 