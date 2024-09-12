import { IUsers } from "../../../../../interfaces/IUsers.interfaces.ts";
import LoginInteractionsScreen from "./login.interactions.screen.ts";

export default class LoginActionsScreen extends LoginInteractionsScreen {

    public async getMessage() {
        return await this.alert.getText()
    }

    public async toLogin(users: IUsers){
        await super.setUsername(users.userName)
        await super.setPassword(users.password)
    }

}