import { wikipedia02 } from "../../data/login/login.data.ts"
import LoginActionsScreen from "../pageobjects/more/loginOrCreatAccount/login/login.actions.screen.ts"
import LoginQuestionScreen from "../pageobjects/more/loginOrCreatAccount/login/login.question.screen.ts"
import LoginOrCreatAccountActionsScreen from "../pageobjects/more/loginOrCreatAccount/loginOrCreatAccount.Actions.screen.ts"
import MoreActionsScreen from "../pageobjects/more/more.actions.screen.ts"
import OnboardingActionsScreen from "../pageobjects/onboarding.actions.screen.ts"

const onboardingActions = new OnboardingActionsScreen()
const moreActions = new MoreActionsScreen()
const loginOrCreatAccountActions = new LoginOrCreatAccountActionsScreen()
const loginAction = new LoginActionsScreen()
const loginQuestion = new LoginQuestionScreen()

describe('Wikipedia', () => {
    it('[WIKIPEDIA-02] - Validar mensagem de login inválido', async () => {

        await onboardingActions.clickBtnSkip()
        await moreActions.clickBtnMore()
        await loginOrCreatAccountActions.clickLogin()
        await loginOrCreatAccountActions.clickBtnLogin()
        await loginAction.toLogin(wikipedia02)
        await loginAction.clickBtnLogin()
        await loginQuestion.getMessage('O nome de utilizador ou a palavra-passe inseridos estão incorretos.\nTente novamente, por favor.')
    })
})