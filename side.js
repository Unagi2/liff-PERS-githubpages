$(function () {
    // カレンダー
    $(function () {
        $('input[name="date_side"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });



    // 送信
    $('form').submit(function () {

        var badge = $('h1[name="badge').val();
        if(badge == "医療受診記録"){
            var first = $('input[name="first_side"]:checked').val();
            var password = $('input[id="passwd_side"]').val();
            var date = $('input[name="date_side"]').val();
            var where =$('textarea[name="where-text"]').val();
            var what =$('textarea[name="what-text"]').val();


            if(first == false | password == false | date == false | where == false | what == false ){
                return false;
            }

            var msg = `【医療受診記録】\nmode:Hospital\n初回利用:${first}\nPassword:${password}\n受診日:${date}\n病院名:${where}\n病状:${what}\n`;
        }
        
        sendText(msg);

        return false;
    });
});
