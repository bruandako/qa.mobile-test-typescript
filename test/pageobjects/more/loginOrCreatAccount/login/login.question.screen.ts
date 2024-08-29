import LoginActionsScreen from "./login.actions.screen.ts";

export default class LoginQuestionScreen extends LoginActionsScreen {

    public async invalidUserMessageIsDisplayed(desiredText) {
        expect(await super.getMessage()).toBe(desiredText)
    }

}