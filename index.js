$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
    /*
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });
    */

    // 送信
    $('form').submit(function () {
        var password = $('input[id="passwd2"]').val();
        var date = $('input[name="date"]').val();
        var temp = $('input[name="temp"]').val();
        var number = $('input[name="number"]:checked').val();
        var names = '';
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);

        var msg = `Password：${password}\n記録日：${date}\n時間帯：${number}\n体温：${temp}`;
        sendText(msg);

        return false;
    });
});