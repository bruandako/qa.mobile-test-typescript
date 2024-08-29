import { wikipedia01 } from "../../data/search/search.data.ts"
import OnboardingActionsScreen from "../pageobjects/onboarding.actions.screen.ts"
import SearchActionsScreen from "../pageobjects/search/search.actions.screen.ts"
import SearchQuestionsScreen from "../pageobjects/search/search.questions.screen.ts"

const onboarding = new OnboardingActionsScreen()
const search = new SearchActionsScreen()
const searchResult = new SearchQuestionsScreen()

describe('Wikipedia', () => {
    it('[WIKIPEDIA-01] - Realizar pesquisa no wikipedia', async () => {

        await onboarding.clickBtnSkip()
        await search.pesquisar(wikipedia01.searchName)
        await searchResult.oTextoPesquisadoEIgualA(wikipedia01.searchName)

    })
})