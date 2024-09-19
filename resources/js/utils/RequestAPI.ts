import axios, { AxiosError } from "axios";

class RequestAPI {
    static async _request({
        method,
        action,
        data,
        timeout = 60000,
    }: {
        method: "GET" | "POST" | "PUT" | "DELETE";
        action: string;
        data?: any;
        timeout?: number;
    }) {
        try {
            let res;
            if (["GET", "POST", "DELETE"].includes(method)) {
                res = await axios.request({
                    url: action,
                    method: method,
                    data: data,
                    timeout: timeout,
                });
            } else if (method == "PUT") {
                if (data instanceof FormData) {
                    data.append("_method", "PUT");
                } else if (typeof data == "object") {
                    data._method = "PUT";
                } else if (data == undefined) {
                    data = { _method: "PUT" };
                }
                res = await axios.request({
                    url: action,
                    method: "POST",
                    data: data,
                });
            }
            return res?.data;
        } catch (err) {
            // console.log(err)
            if (err instanceof AxiosError) {
                if (err.response?.data.message != undefined) {
                    throw err.response?.data;
                    // return err.response?.data
                } else {
                    throw "Terjadi Kesalahan: " + err.message;
                }
            }
        }
    }
    static async exampleGet(): Promise<any> {
        return await this._request({
            method: "GET",
            action: `api/getunit`,
        });
    }

    static async ExamplePost({
        data,
    }: {
        data: any;
    }): Promise<{ data: any[] }> {
        return await this._request({
            method: "POST",
            action: `/api/postData`,
            data: data,
        });
    }

    static async getUnit(): Promise<any> {
        return await this._request({
            method: "GET",
            action: `api/getunit`,
        });
    }

    static async inputTemuan({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/inputtemuan`,
            data: data,
        });
    }

    static async getTemuan({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `api/gettemuan`,
            data: data,
        });
    }

    static async getTemuanValidasi({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `api/gettemuanvalidasi`,
            data: data,
        });
    }

    static async getCountTemuan(): Promise<any> {
        return await this._request({
            method: "GET",
            action: `api/counttemuan`,
        });
    }

    static async getCountValidasi(): Promise<any> {
        return await this._request({
            method: "GET",
            action: `api/countvalidasi`,
        });
    }

    static async getCountUnit(): Promise<any> {
        return await this._request({
            method: "GET",
            action: `api/countunit`,
        });
    }

    static async getCountRekomendasi(): Promise<any> {
        return await this._request({
            method: "GET",
            action: `api/countrekomendasi`,
        });
    }

    static async getBidang(): Promise<any> {
        return await this._request({
            method: "GET",
            action: `api/getbidang`,
        });
    }

    static async deleteTemuan({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `api/deletetemuan`,
            data: data,
        });
    }

    static async deleteRekomendasi({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `api/deleterekomendasi`,
            data: data,
        });
    }

    static async updateTemuan({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/updatetemuan`,
            data: data,
        });
    }

    static async getTemuanHistory({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/gettemuanhistory`,
            data: data,
        });
    }

    static async inputTindakLanjut({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/inputtindaklanjut`,
            data: data,
        });
    }

    static async kirimTemuan({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/kirimtemuan`,
            data: data,
        });
    }
    static async prosesTemuan({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/prosestemuan`,
            data: data,
        });
    }
    static async validasiTemuan({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/validasitemuan`,
            data: data,
        });
    }

    static async unitCekValidasi({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/unitcekvalidasi`,
            data: data,
        });
    }

    static async getNotifikasi({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/getnotifikasi`,
            data: data,
        });
    }

    static async readNotifikasi({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/readnotifikasi`,
            data: data,
        });
    }

    static async readAllNotifikasi({ data }: { data: any }): Promise<any> {
        return await this._request({
            method: "POST",
            action: `/api/readallnotifikasi`,
            data: data,
        });
    }
}

export default RequestAPI;
