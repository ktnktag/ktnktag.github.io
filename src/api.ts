import { sha256 } from 'js-sha256';
import { redirect } from 'react-router-dom';

// check the entered code for authenticity
export function IsCorrectCode(code: string) {
    const hash = sha256.create();
    hash.update(code);
    hash.hex();

    return hash.toString() === import.meta.env.VITE_CODE_KEY;
}

// check if the user is authorized
export function IsAuth() {
    if (window.sessionStorage.getItem('key'))
    {
        return false;
    }
    else {
        return true;
    }
}

// save the information that the user entered the correct code
export function SetIsAuth() {
    window.sessionStorage.setItem('key', 'true');
}

export function RequireAuth() {
    if (IsAuth()) {
        return redirect('/');
    }
    else {
        return null;
    }
}