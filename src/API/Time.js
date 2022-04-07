export default class Time {
    static diffSun(hour1, hour2, minute1, minute2) {
        return (
        hour1 - hour2 > 0
            ? `${hour1 - hour2} ч назад`
                : hour1 === hour2
                    ? minute1 === minute2
                        ? "Сейчас"
                            : minute1 - minute2 > 0
                                ? `${minute1 - minute2} мин назад`
                                    : `Через ${minute2 - minute1} мин`
                                        : `Через ${hour2 - hour1} ч`
        );
    };
    static unixToDate(unix) {
        return new Date(unix * 1000);
    };
}