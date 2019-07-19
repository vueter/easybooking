export default {

    methods: {
        formatPrice(price) {
            price = Math.ceil(price);
            if (price === null) {
                return "Билетов нет";
            } else {
                price = Math.ceil(price);
                price = new Intl.NumberFormat("ru-RU").format(price);
                return price;
            }
        },
        formatFilterDate(timestamp) {
            var a = new Date(timestamp * 1000);
            var months_arr = [
                "Янв",
                "Фев",
                "Мар",
                "Апр",
                "Май",
                "Июн",
                "Июл",
                "Авг",
                "Сен",
                "Окт",
                "Ноя",
                "Дек"
            ];
            var week_arr = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
            var year = a.getFullYear();
            var month = months_arr[a.getMonth()];
            var month2 = a.getMonth();
            var week = week_arr[a.getDay()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = hour + ":" + (min < 10 ? 0 : '') + min + ", " + date + " " + month;
            return time;
        },
        formatTime(time) {
            time = parseInt(time);
            const minute = time % 60;
            const hour = (time - minute) / 60;
            if (hour) {
                return hour + " ч  " + minute + " мин";
            } else {
                return minute + " мин";
            }
        },
    },



}