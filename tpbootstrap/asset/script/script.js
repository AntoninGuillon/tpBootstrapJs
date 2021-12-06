class User {
    STORAGE_KEY = "user";
    SESSION_KEY = "connectedUser";

    constructor(name,email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }

    hashPassword() {
        let hashed = [this.password].map(v => v.charCodeAt(0)).join('');
        hashed = hashed.repeat(20).split('');
        hashed.length = 40;
        return hashed.join('');
    }
}




function setData() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;

    let user = new User(name,email,password);
    user.password = user.hashPassword();


    localStorage.setItem((user.STORAGE_KEY + name), JSON.stringify(user));

}

