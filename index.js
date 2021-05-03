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
        var first = $('input[name="first"]:checked').val();
        var password = $('input[id="passwd2"]').val();
        var date = $('input[name="date"]').val();
        var temp = $('input[name="temp"]').val();
        var number = $('input[name="number"]:checked').val();
        var feverish =$('input[name="feverish"]:checked').val();
        var respiratory =$('input[name="respiratory"]:checked').val();
        var respiratory_yes =$('input[id=check-respiratory]:checked').val();
        var symptoms =$('input[name="symptoms"]:checked').val();
        var symptoms_yes =$('input[id="symptoms-text"]').val();
        var contact =$('input[name="contact"]:checked').val();
        var contact_group =$('input[name="group"]').val();
        var contact_name =$('input[name="name"]').val();
        var contact_action =$('input[name="action"]').val();

        /*
        var names = '';
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);
        */

        var msg = `初回利用：${first}\nPassword：${password}\n記録日：${date}\n時間帯：${number}\n体温：${temp}\n熱感：${feverish}\n呼吸器症状：${respiratory}\n呼吸器症状内容：${respiratory_yes}\nその他自覚症状：${symptoms}\n自覚症状内容：${symptoms_yes}\n濃厚接触者：${contact}\n所属：${contact_group}\n名前：${contact_name}\n行動内容：${contact_action}`;
        sendText(msg);

        return false;
    });
});