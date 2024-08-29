import LoginOrCreatAccountElementsScreen from "./loginOrCreatAccount.elements.screen.ts"

export default class LoginOrCreatAccountInteractionsScreen extends LoginOrCreatAccountElementsScreen {

    protected async clickLogin() {
        await super.loginOrCreactAccount.click()
    }

    protected async clickBtnLogin() {
        await super.btnLogin.click()
    }

}