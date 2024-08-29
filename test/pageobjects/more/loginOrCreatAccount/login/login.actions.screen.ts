import LoginInteractionsScreen from "./login.interactions.screen.ts";

export default class LoginActionsScreen extends LoginInteractionsScreen {

    public async getMessage() {
        return await this.alert.getText()
    }

}