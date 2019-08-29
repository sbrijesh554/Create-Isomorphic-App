class AuthStore{
    constructor(){
        this._role = undefined;
        this._isAuthenticated = false;
    }

    set token(newToken){
        localStorage.setItem("token", newToken);
    }

    get token(){
        return localStorage.getItem("token");
    }

    set role(newRole){
        this._role = newRole;
    }

    get role(){
        return this._role;
    }

    set isAuthenticated(param){
        this._isAuthenticated = param;
    }

    get isAuthenticated(){
        return this._isAuthenticated;
    }

}

const authStore = new AuthStore();

export default authStore;