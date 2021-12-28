/**
 * 类型判断
 */
// 判断访问终端
const userAgent = navigator.userAgent.toString();
export const browserVersions = {
    trident: userAgent.indexOf('Trident') > -1,
    presto: userAgent.indexOf('Presto') > -1,
    webKit: userAgent.indexOf('AppleWebKit') > -1,
    gecko: userAgent.indexOf('Gecko') > -1 && userAgent.indexOf('KHTML') === -1,
    mobile: !!userAgent.match(/AppleWebKit.*Mobile.*/),
    ios: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: userAgent.indexOf('Android') > -1,
    iPhone: userAgent.indexOf('iPhone') > -1,
    iPad: userAgent.indexOf('iPad') > -1,
    webApp: userAgent.indexOf('Safari') === -1,
    weixin: userAgent.indexOf('MicroMessenger') > -1 // 是否微信 （2015-01-22新增）
};
// 判断是否移动端
export function isMobile() {
    return browserVersions.mobile || browserVersions.android || browserVersions.ios;
}

export function isIE() {
    return /msie\s+(.*?);/i.test(navigator.userAgent) || /Trident\/7\./.test(navigator.userAgent);
}

export function isEmpty(val: any) {
    if (typeof val === 'undefined' || val === null || val === '') {
        return true;
    }
    else {
        return false;
    }
}

export function isUndefined(val: any) {
    return typeof val === 'undefined';
}

export function isNull(val: any) {
    return val === null;
}

export function isNullOrUndefined(val: any) {
    if (typeof val === 'undefined' || val === null) {
        return true;
    }
    else {
        return false;
    }
}
export function isBoolean(val: any) {
    return typeof val === 'boolean';
}
export function isNumber(val: any) {
    return typeof val === 'number' && !isNaN(val);
}
export function isString(val: any) {
    return typeof val === 'string';
}
export function isDate(val: any) {
    return typeof val === 'object' && Object.prototype.toString.call(val) === '[object Date]' && val.toString() !== 'Invalid Date';
}
export function isArray(val: any) {
    return val instanceof Array;
}
export function isFunction(val: any) {
    return typeof val === 'function';
}
export function isPromise(obj: any) {
    return !!obj && typeof obj.then === 'function';
}
export function isPlainObject(val: any) {
    return !isEmpty(val) && Object.prototype.toString.call(val) === '[object Object]';
}
export function isEmptyObject(obj: any) {
    if (!isPlainObject(obj)) {
        return false;
    }
    for (var propName in obj) {
        return false;
    }
    return true;
}
export function isEmail(value: any) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value));
}
