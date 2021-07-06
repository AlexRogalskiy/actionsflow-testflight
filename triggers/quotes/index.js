module.exports = class Example {
    getItemKey(item) {
        if (item.id) {
            return item.id;
        }
        return this.helpers.createContentDigest(item);
    }

    constructor({helpers, options}) {
        this.options = options;
        this.helpers = helpers;
    }

    async run() {
        return {message: this.options.url};
    }
};
