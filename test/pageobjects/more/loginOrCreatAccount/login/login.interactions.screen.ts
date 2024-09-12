import LoginElementsScreen from "./login.elements.screen.ts"

export default class LoginInteractionsScreen extends LoginElementsScreen {

    protected async setUsername(users: string) {
        await super.username.setValue(users)
    }

    protected async setPassword(users: number) {
        await super.password.setValue(users)
    }

    protected async clickBtnLogin() {
        await super.login.click()
    }

}