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
            let index;
            for (index = 0; index < arr.length; ++index) {
                if (arr[index] == 0) {
                    arr[index] = arr[index];
                } else if (arr[index] % 3 == 0 && arr[index] % 5 == 0) {
                    arr[index] = 'apple and orange';
                } else if (arr[index] % 3 == 0 && arr[index] != 0) {
                    arr[index] = 'apple';
                } else if (arr[index] % 5 == 0 && arr[index] != 0) {
                    arr[index] = 'orange';
                }
                $('.out').val(arr);
            }
        });
    }
}