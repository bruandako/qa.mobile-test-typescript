import SearchActionsScreen from "./search.actions.screen.ts"

export default class SearchQuestionsScreen extends SearchActionsScreen {

    public async oTextoPesquisadoEIgualA(searchName) {
        expect(await super.pesquisar()).toBe(searchName)
    }

}