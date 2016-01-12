
/**
 * @type {HTMLDocument}
 */
const document = window.document;

/**
 * @type {Boolean}
 */
let domLoaded = /interactive|complete|loaded/.test(document.readyState);

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

    document.addEventListener('DOMContentLoaded', domLoadedEvent, false);
}

export function ready(fn) {
    if (domLoaded) {
        fn();
    } else {
        domLoadedFns.push(fn);
    }
}
