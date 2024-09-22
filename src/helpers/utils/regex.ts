export const REGEX_FLOAT = /^-?\d+(\.\d+)?$/
export const REGEX_UNSIGNED_FLOAT = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/
export const REGEX_NUMBER = /^([0-9\s]*)$/
export const REGEX_NUMBER_AND_DASH = /^([0-9\s-]*)$/
export const REGEX_FORMAT_PRICE = /\s\s+|,|[^0-9]/g
export const REGEX_TEL = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
export const REGEX_EMAIL =
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
