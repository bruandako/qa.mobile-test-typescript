import SearchResultElementsScreen from "./searchResult.elements.screen.ts";

export default class SearchResultInteractionsScreen extends SearchResultElementsScreen {

    async getSearchResult() {
        await super.searchResult.getText()
    }

}