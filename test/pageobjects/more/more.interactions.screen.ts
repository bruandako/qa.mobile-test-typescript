import MoreElementsScreen from "./more.elements.screen.ts";

export default class MoreInteractionsScreen extends MoreElementsScreen {

    protected async clickBtnMore() {
        await super.moreBtn.click()
    }

}