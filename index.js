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


    //Display設定
    //
    // 要素を取得
    let ele0 = document.getElementById('form-pass_first');
    let ele1 = document.getElementById('passwd1');
    let ele2 = document.getElementById('form-pass_second');
    let ele3 = document.getElementById('passwd2');

    let ele4 = document.getElementById('form-date');
    let ele5 = document.getElementById('date1');

    let ele6 = document.getElementById('form-time');
    let ele7 = document.getElementById('time1');
    let ele8 = document.getElementById('time2');

    let ele9 = document.getElementById('form-temp');
    let ele10 = document.getElementById('temp');

    let ele11 = document.getElementById('form-feverish');
    let ele12 = document.getElementById('feverish');

    let ele13 = document.getElementById('form-respiratory');
    let ele14 = document.getElementById('respiratory');
    
    let ele16 = document.getElementById('check-respiratory');

    let ele17 = document.getElementById('form-symptoms');
    let ele18 = document.getElementById('symptoms');
    let ele18 = document.getElementById('symptoms-text');
    
    let ele20 = document.getElementById('contact');
    let ele21 = document.getElementById('contact-group');
    let ele22 = document.getElementById('contact-name');
    let ele23 = document.getElementById('contact-action');

    // 現在の display プロパティの値を保持
    const displayOriginal0 = ele0.style.display;
    const displayOriginal1 = ele1.style.display;
    const displayOriginal2 = ele2.style.display;
    const displayOriginal3 = ele3.style.display;
    const displayOriginal4 = ele4.style.display;
    const displayOriginal5 = ele5.style.display;
    const displayOriginal6 = ele6.style.display;
    const displayOriginal7 = ele7.style.display;
    const displayOriginal8 = ele8.style.display;
    const displayOriginal9 = ele9.style.display;
    const displayOriginal10 = ele10.style.display;
    const displayOriginal11 = ele11.style.display;
    const displayOriginal12 = ele12.style.display;
    const displayOriginal13 = ele13.style.display;
    const displayOriginal14 = ele14.style.display;

    const displayOriginal16 = ele16.style.display;
    const displayOriginal17 = ele17.style.display;
    const displayOriginal18 = ele18.style.display;

    const displayOriginal20 = ele20.style.display;
    const displayOriginal21 = ele21.style.display;
    const displayOriginal22 = ele22.style.display;
    const displayOriginal23 = ele23.style.display;


    // none に設定して非表示
    ele0.style.display = 'none';
    ele1.style.display = 'none';
    ele2.style.display = 'none';
    ele3.style.display = 'none';
    ele4.style.display = 'none';
    ele5.style.display = 'none';
    ele6.style.display = 'none';
    ele7.style.display = 'none';
    ele8.style.display = 'none';
    ele9.style.display = 'none';
    ele10.style.display = 'none';
    ele11.style.display = 'none';
    ele13.style.display = 'none';
    ele14.style.display = 'none';

    ele16.style.display = 'none';
    ele17.style.display = 'none';
    ele18.style.display = 'none';
    
    ele20.style.display = 'none';
    ele21.style.display = 'none';
    ele22.style.display = 'none';
    ele23.style.display = 'none';

    // 元に戻して表示
    //ele.style.display = displayOriginal;



    // 送信
    $('form').submit(function () {

        var first = $('input[name="first"]:checked').val();
        var password_set = $('input[id="passwd1"]').val();
        var password = $('input[id="passwd2"]').val();
        var date = $('input[name="date"]').val();
        var time = $('input[name="time"]:checked').val();
        var temp = $('input[name="temp"]').val();
        var feverish =$('input[name="feverish"]:checked').val();
        var respiratory =$('input[name="respiratory"]:checked').val();
        //var respiratory_yes =$('input[id=check-respiratory]:checked').val();
        var symptoms =$('input[name="symptoms"]:checked').val();
        var symptoms_yes =$('textarea[id="symptoms-text"]').val();
        var contact =$('input[name="contact"]:checked').val();
        var contact_group =$('input[name="group"]').val();
        var contact_name =$('input[name="name"]').val();
        var contact_action =$('textarea[name="action"]').val();

        /*
        var names = '';
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);
        */

        
        // 複数ボタン値取得
        var checked_data = new Array();
        var input_respiratory = document.querySelectorAll("input[name=cb]");

        if( 0 < input_respiratory.length ) {

	        checked_data['respiratory'] = new Array();

	        for(var data of input_respiratory) {
		        if( data.checked ) {
			        checked_data['respiratory'].push(data.value);
		        }
	        }
        }

        var msg = `初回利用：${first}\nPassword Set：${password_set}\nPassword：${password}\n記録日：${date}\n時間帯：${time}\n体温：${temp}\n熱感：${feverish}\n呼吸器症状：${respiratory}\n呼吸器症状内容：${checked_data['respiratory']}\nその他自覚症状：${symptoms}\n自覚症状内容：${symptoms_yes}\n濃厚接触者：${contact}\n所属：${contact_group}\n名前：${contact_name}\n行動内容：${contact_action}`;
        sendText(msg);

        return false;
    });
});