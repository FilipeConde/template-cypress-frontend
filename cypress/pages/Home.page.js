
const elements = {
  userInput: '#user-name',
	passwordInput: '#password',
	loginBtn: '#login-button'
}

const {userInput, passwordInput, loginBtn} = elements

export default class HomePage {
  static realizarLogin(user, password) {
		cy.get(userInput).type(user)
		cy.get(passwordInput).type(password)
		cy.get(loginBtn).click()
  }
}