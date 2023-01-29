/**
 * receive any data and convert for binary
 * @param {*} data
 */
export const encode = (data) => {
    return new TextEncoder().encode(JSON.stringify(data)).buffer;
};

/**
 * receive any data and convert for binary
 * @param {Uint8Array.buffer} data
 */
export const decode = async(data) => {
    const jsonString = new TextDecoder().decode(new Uint8Array(data));
    return JSON.parse(jsonString);
};