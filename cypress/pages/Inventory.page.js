
const elements = {
	titleSpan: '.title'
}

const {titleSpan} = elements

export default class InventoryPage {
  static getTitleSpan() {
		return cy.get(titleSpan)
	}
}