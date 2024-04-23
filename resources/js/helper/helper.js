export const GetKey =
    import.meta.env.VITE_ENVIRONMENT === "development"
        ? import.meta.env.VITE_KEY_DEV
        : import.meta.env.VITE_KEY;
export const GetUrl =
    import.meta.env.VITE_ENVIRONMENT === "development"
        ? import.meta.env.VITE_URL_DEV
        : import.meta.env.VITE_URL;

export async function CallApi(url, method, data = {}) {
    let headers = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    Object.keys(data).map((value, key) => {
        headers[key] = value;
    });

    let respon = await fetch(`${GetUrl}${url}`, method, headers);
    return await respon.json();
}
