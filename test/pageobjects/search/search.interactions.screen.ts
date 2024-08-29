import SearchElementsScreen from "./search.elements.screen.ts"

export default class SearchInteractionsScreen extends SearchElementsScreen {

    protected async clickBtnSearch() {
        await this.btnSearch.click()
    }

    protected async setValueInpSearch(searchText) {
        await this.inpSearch.setValue(searchText)
    }

}