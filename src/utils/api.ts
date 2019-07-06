export const BASE_API_URL = 'https://mcricwiojwfb.cleancitynetworks.com/';

export type ApiResponseType<T> = {
    statusCode?: number,
    error?: string,
    message?: string,
    data?: T
}
