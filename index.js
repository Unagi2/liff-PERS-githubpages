$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    $(function () {
        $('input[name="date-start"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
    $(function () {
        $('input[name="date-end"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });


    // 人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#contact-sheet').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#contact-sheet').append(
                `<div id="contact-sheet">
                <label for="contact-group">所属(Member)</label>
                <input class="form-control w-100 mt-1" id="contact-group" name="group">

                <label for="contact-name">氏名(Name)</label>
                <input class="form-control w-100 mt-1" id="contact-name" name="name">

                <label for="contact-action">行動内容(Action Description)</label>
                <textarea class="form-control w-100 mt-1" id="contact-action" name="action" rows="3"></textarea>
                </div>
                <hr id="bar09">`
            );
        }
    });



    // 送信
    $('form').submit(function () {

        const badge = $('h1[name="badge"]').text();
        
        if(badge == "通常記録"){
            var first = $('input[name="first"]:checked').val();
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

            if(first == false | password == false | date == false | time == false | temp == false | feverish == false | respiratory == false | symptoms == false | contact == false ){
                return false;
            }

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
                        checked_data['respiratory'].push("\""+data.value+"\"");
                    }
                }
            }

            // member
            var checked_member = new Array();
            var input_member = document.querySelectorAll("input[id=contact-group]");

            if( 0 < input_member.length ) {

                checked_member['member'] = new Array();

                for(var data_member of input_member) {
                    checked_member['member'].push("\""+data_member.value+"\"");
                }
            }
            // name
            var checked_name = new Array();
            var input_name = document.querySelectorAll("input[id=contact-name]");

            if( 0 < input_name.length ) {

                checked_name['name'] = new Array();

                for(var data_name of input_name) {
                    checked_name['name'].push("\""+data_name.value+"\"");
                }
            }
            // action
            var checked_action = new Array();
            var textarea_action = document.querySelectorAll("textarea[id=contact-action]");

            if( 0 < textarea_action.length ) {

                checked_action['action'] = new Array();

                for(var data_action of textarea_action) {
                    checked_action['action'].push("\""+data_action.value+"\"");
                }
            }

            var msg = `【通常記録】\nmode:Normal\n初回利用:${first}\nPassword:${password}\n記録日:${date}\n時間帯:${time}\n体温:${temp}\n熱感:${feverish}\n呼吸器症状:${respiratory}\n呼吸器症状内容:${checked_data['respiratory']}\nその他自覚症状:${symptoms}\n自覚症状内容:${symptoms_yes}\n濃厚接触者:${contact}\n所属:${checked_member['member']}\n名前:${checked_name['name']}\n行動内容:${checked_action['action']}\n`;
        }
        
        else if(badge == "医療受診記録"){
            var first = $('input[name="first"]:checked').val();
            var password = $('input[id="passwd2"]').val();
            var date = $('input[name="date"]').val();
            var where =$('textarea[name="where-text"]').val();
            var what =$('textarea[name="what-text"]').val();


            if(first == false | password == false | date == false | where == false | what == false ){
                return false;
            }

            var msg = `【医療受診記録】\nmode:Hospital\n初回利用:${first}\nPassword:${password}\n受診日:${date}\n病院名:${where}\n病状:${what}\n`;
        }

        else if(badge == "県外訪問記録"){
            var first = $('input[name="first"]:checked').val();
            var password = $('input[id="passwd2"]').val();
            var date_start = $('input[id="date-start"]').val();
            var date_end = $('input[id="date-start"]').val();
            var where =$('textarea[id="where-text"]').val();
            var what =$('textarea[id="what-text"]').val();


            if(first == false | password == false | date == false | where == false | what == false ){
                return false;
            }

            var msg = `【県外訪問記録】\nmode:Visit\n初回利用:${first}\nPassword:${password}\n訪問開始日:${date_start}\n訪問開始日:${date_end}\n病院名:${where}\n病状:${what}\n`;
        }

        else{
            var msg = `Error`;
        }

        
        sendText(msg);

        return false;
    });
});
