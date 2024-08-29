import LoginElementsScreen from "./login.elements.screen.ts"

export default class LoginInteractionsScreen extends LoginElementsScreen {

    protected async setUsername(users: IUsers) {
        await super.username.setValue(users.userName)
    }

    protected async setPassword(users: IUsers) {
        await super.password.setValue(users.password)
    }

    protected async clickBtnLogin() {
        await super.login.click()
    }

}