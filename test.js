var controller = {

    init() {

        let arr = [];

        $('.butt').click(function () {
            let a = $('.in').val();
            $('.out').val(+a);
            arr.push(+a);
            $('.out').val(arr);
            $('.in').val('');
        });
        $('.word').click(function () {
            arr.forEach(function (value, i) {
                if (value != 0) {
                    let str = [];
                    if (value % 3 == 0) {
                        str.push('apple');
                    }
                    if (value % 5 == 0) {
                        str.push('orange');
                    }
                    if (str.length) {
                        arr[i] = str.join(' and ');
                    }
                }
            })
            $('.out').val(arr);
        });
    }
}