class loginPage{

    elements = {
        usernameField: () => cy.get('input[placeholder="username"]'),
        passwordField: () => cy.get('input[placeholder="password"]'),
        signInButton: () => cy.get('input[type=submit][value="Sign in"]')
    }

    typeUsername(username){
        this.elements.usernameField().type(username);
    }

    typeUsername(password){
        this.elements.passwordField().type(password);
    }

    clickSignInButton(){
        this.elements.signInButton().click();
    }
}

module.exports = new loginPage()