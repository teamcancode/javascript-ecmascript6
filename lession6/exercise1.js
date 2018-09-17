function printDaysOfMonth(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log('Có 31 ngày');
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log('Có 30 ngày');
            break;
        case 2:
            console.log('Có 28 hoặc 29 ngày');
            break;
        default:
            throw 'Tháng không hợp lệ';
    }
}

printDaysOfMonth(2);
