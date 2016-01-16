'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (fn) {
    if (domLoaded) {
        fn();
    } else {
        domLoadedFns.push(fn);
    }
};

/**
 * @type {HTMLDocument}
 */
const document = window.document;

/**
 * @type {Boolean}
 */
let domLoaded = document.readyState !== 'loading';

/**
 * @type {Array}
 */
const domLoadedFns = [];

if (!domLoaded) {
    /**
     * @type {Function|undefined}
     */
    let domLoadedFn;

    /**
     * @type {Function}
     */
    const domLoadedEvent = () => {
        document.removeEventListener('DOMContentLoaded', domLoadedEvent);
        domLoaded = true;

        while (domLoadedFn = domLoadedFns.shift()) {
            domLoadedFn();
        }
    };

    document.addEventListener('DOMContentLoaded', domLoadedEvent);
}

module.exports = exports['default'];