// Dont Edit it
export const API_BASE_URL = 'https://mcricwiojwfb.cleancitynetworks.com/';

export async function callLambda(url, idToken, onResult, onError) {
  return await callLambdaWithData(url, idToken, undefined, onResult, onError);
}

export async function callLambdaWithData(url, idToken, data, onResult, onError) {
  const error = onError || ((res) => console.log(res));
  const request = requestBuilder(data, idToken);

  const promise = fetch(API_URL + url, request)
    .then((res) => res.json(), error);

  if (!!onResult) {
    return await promise.then(onResult);
  } else {
    return await promise;
  }
}

export const requestBuilder = (data: object, idToken?: string) => Object.assign(
  {
    method: 'POST',
    body: JSON.stringify(data)
  },
  !!idToken
    ? {headers: {Authorization: idToken}}
    : {}
);

export const lambdaDefaultFulfill = (funcName) => (res) => {
  if (!res || !res.hasOwnProperty('exitCode')) {
    console.log(res);
    throw new Error(`${funcName}: Invalid`);
  }

  return res;
};
