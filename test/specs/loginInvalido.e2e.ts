import { wikipedia02 } from "../../data/search/login/login.data.ts"
import LoginActionsScreen from "../pageobjects/more/loginOrCreatAccount/login/login.actions.screen.ts"
import LoginQuestionScreen from "../pageobjects/more/loginOrCreatAccount/login/login.question.screen.ts"
import LoginOrCreatAccountActionsScreen from "../pageobjects/more/loginOrCreatAccount/loginOrCreatAccount.Actions.screen.ts"
import MoreActionsScreen from "../pageobjects/more/more.actions.screen.ts"
import OnboardingActionsScreen from "../pageobjects/onboarding.actions.screen.ts"


describe('Wikipedia', () => {
    it('abrindo o aplicativo wikipedia', async () => {
        const onboardingActions = new OnboardingActionsScreen()
        const moreActions = new MoreActionsScreen()
        const loginOrCreatAccountActions = new LoginOrCreatAccountActionsScreen()
        const loginAction = new LoginActionsScreen()
        const loginQuestion = new LoginQuestionScreen()

        await onboardingActions.clickBtnSkip()

        //clicar 'Mais'
        await moreActions.clickBtnMore()

        //clicar em Entrar/Juntar-se
        await loginOrCreatAccountActions.clickLogin()

        //Clicar em Entrar
        await loginOrCreatAccountActions.clickBtnLogin()

        //Preencher nome de usuário e senha
        await loginAction.setUsername(wikipedia02.userName)
        await loginAction.setPassword(wikipedia02.password)

        //Clicar em Entrar
        await loginAction.clickBtnLogin()

        //Validar mensagem de login incorreto
        await loginQuestion.getMessage('O nome de utilizador ou a palavra-passe inseridos estão incorretos.\nTente novamente, por favor.')
    })
})