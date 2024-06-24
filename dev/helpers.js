// The following code is credited to FoundryVTT;
// Used under the Limited License for Package Development https://foundryvtt.com/article/license/

/**
   * Flatten a possibly multi-dimensional object to a one-dimensional one by converting all nested keys to dot notation
   * @param {object} obj        The object to flatten
   * @param {number} [_d=0]     Track the recursion depth to prevent overflow
   * @return {object}           A flattened object
   */
export function flattenObject(obj, _d = 0) {
    const flat = {};
    if (_d > 100) {
        throw new Error("Maximum depth exceeded");
    }
    for (let [k, v] of Object.entries(obj)) {
        let t = getType(v);
        if (t === "Object") {
            if (isEmpty$1(v)) flat[k] = v;
            let inner = flattenObject(v, _d + 1);
            for (let [ik, iv] of Object.entries(inner)) {
                flat[`${k}.${ik}`] = iv;
            }
        }
        else flat[k] = v;
    }
    return flat;
}

/**
   * Learn the underlying data type of some variable. Supported identifiable types include:
   * undefined, null, number, string, boolean, function, Array, Set, Map, Promise, Error,
   * HTMLElement (client side only), Object (catchall for other object types)
   * @param {*} variable  A provided variable
   * @return {string}     The named type of the token
   */
export function getType(variable) {

    // Primitive types, handled with simple typeof check
    const typeOf = typeof variable;
    if (typeOf !== "object") return typeOf;

    // Special cases of object
    if (variable === null) return "null";
    if (!variable.constructor) return "Object"; // Object with the null prototype.
    if (variable.constructor.name === "Object") return "Object";  // simple objects

    // Match prototype instances
    const prototypes = [
        [Array, "Array"],
        [Set, "Set"],
        [Map, "Map"],
        [Promise, "Promise"],
        [Error, "Error"],
    ];
    if ("HTMLElement" in globalThis) prototypes.push([globalThis.HTMLElement, "HTMLElement"]);
    for (const [cls, type] of prototypes) {
        if (variable instanceof cls) return type;
    }

    // Unknown Object type
    return "Object";
}

/**
   * Test whether a value is empty-like; either undefined or a content-less object.
   * @param {*} value       The value to test
   * @returns {boolean}     Is the value empty-like?
   */
export function isEmpty$1(value) {
    const t = getType(value);
    switch (t) {
        case "undefined":
            return true;
        case "null":
            return true;
        case "Array":
            return !value.length;
        case "Object":
            return !Object.keys(value).length;
        case "Set":
        case "Map":
            return !value.size;
        default:
            return false;
    }
}