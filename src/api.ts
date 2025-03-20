import { sha256 } from 'js-sha256';

// check the entered code for authenticity
export function IsCorrectCode(code: string) {
    const hash = sha256.create();
    hash.update(code);
    hash.hex();
    const REACT_APP_CODE_KEY = "31e28b8090e57e6d25d73562ff25448f4436130a996da649dab3798b7bc7ba7f"

    return hash.toString() === REACT_APP_CODE_KEY;
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