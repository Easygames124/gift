export default class Formatting {
    static toDoubleNumber(number) {
        return number > 9 ? number : `0${number}`;
    };
    static fBig (str) {
        try {
            return `${str[0].toUpperCase()}${str.slice(1)}`;
        } catch {
            return '';
        }
    };
};