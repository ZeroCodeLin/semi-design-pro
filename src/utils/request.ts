export enum AjaxResultCode {
    success = 200,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    methodNotAllowed = 405,
    notAcceptable = 406,
    proxyAuthRequired = 407,
    clientTimeout = 408,
    conflict = 409,
    resourceGone = 410,
    lengthRequired = 411,
    preconditionFailed = 412,
    entityTooLarge = 413,
    uriTooLong = 414,
    unsupportedMediaType = 415,
    rangeNotSatisfiable = 416,
    expectationFailed = 417,
    teapot = 418,
    badData = 422,
    locked = 423,
    failedDependency = 424,
    preconditionRequired = 428,
    tooManyRequests = 429,
    illegal = 451,
    internal = 500,
    badImplementation = 500,
    notImplemented = 501,
    badGateway = 502,
    serverUnavailable = 503,
    gatewayTimeout = 504
}

// 过滤http的code
export const filterCode = (res: any) => {
    if (res.code === AjaxResultCode.unauthorized) {
        logout();
    }
    if (Number(res.code) === AjaxResultCode.success) {
        return true;
    }
    return false;
};

export const logout = () => {
    window.location.href = `#/login`;
};