import SearchInteractionsScreen from "./search.interactions.screen.ts"

export default class SearchActionsScreen extends SearchInteractionsScreen {

    public async pesquisar(textoParaPesquisa) {
        await this.clickBtnSearch()
        await this.setValueInpSearch(textoParaPesquisa)
    }

}