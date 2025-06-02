import { sha256 } from 'js-sha256';

const KEY = "KEY";

/** check the entered code for authenticity */
export function CheckCode(code: string) {
    const hash = sha256.create();

    hash.update(code);
    hash.hex();

    if (hash.toString() === import.meta.env.VITE_CODE_KEY) {
        SetIsAuth()
        return true;
    }

    return false;
}

/** check if the user is authorized */
export function IsAuth() {
    return !!window.sessionStorage.getItem(KEY);
}

/** save the information that the user entered the correct code */
export function SetIsAuth() {
    window.sessionStorage.setItem(KEY, 'true');
}