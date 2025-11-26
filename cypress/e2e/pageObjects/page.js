export default class Page {
    constructor() {
        this.tittle = 'test'
    }

    open(path)  {
        browser.url(path)
    }
}