class Api {
    /**
     * Connection with api
     * @type {XMLHttpRequest}
     * @private
     */
    ajax;

    constructor() {
        this.ajax = new XMLHttpRequest();
    }

    send(type, url, callback, data = null, header = null) {
        this.ajax.open(type, url);

        let hdr = {
            'Content-Type': 'application/json;charset=UTF-8',
        };

        if (header) hdr = {...hdr, ...header };
        (() => new Promise((resolve) => setTimeout(resolve, 500)))();

        Object.keys(hdr).forEach((key) => {
            this.ajax.setRequestHeader(key, hdr[key]);
        });

        if (data) this.ajax.send(data);
        else this.ajax.send();

        this.ajax.addEventListener('load', () => {
            const res = JSON.parse(this.ajax.response);
            callback(res, this.ajax.removeEventListener);
            // this.ajax.removeEventListener('load', () => {});
        });
    }
}

export const api = new Api();