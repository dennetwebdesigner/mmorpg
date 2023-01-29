import { decode, encode } from './bufferDataConvert.js';

/**
 *
 * @param {*} connection
 * @param {string} sign
 * @param {*} data
 */
export const sendServer = (connection, sign, data) => {
    const bufferArray = encode(data);
    connection.emit(sign, bufferArray);
};

export const receiveServer = (connection, sign, callback) => {
    connection.on(sign, async(data) => {
        const decodeBufferArray = await decode(data);
        callback(decodeBufferArray);
    });
};