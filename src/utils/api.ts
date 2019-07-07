export const BASE_API_URL = 'https://mcricwiojwfb.cleancitynetworks.com/';

// response data 로 받아올 API Response 기본 타입
export type ApiResponseType<T> = {
    statusCode?: number,
    error?: string,
    message?: string,
    data?: T
}
