import OnboardingElementsScreen from "./onborading.elements.screen.ts";

export default class OnboardingInteractionsScreen extends OnboardingElementsScreen {

    protected async clickBtnSkip() {
        await this.btnSkip.click()
    }

}