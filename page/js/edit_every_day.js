let $author = $('#every_day_author'),
    $editor = $('#editor'),
    $sendBtn = $('#send_every_day');

$sendBtn.on('click', function () {
    let author = $author.val(),
        content = $editor.html(),
        params = {
            author, content
        };

    $.ajax({
        url: '/addEveryday',
        method: 'POST',
        data: JSON.stringify(params),
        success(res) {
            res = JSON.parse(res);
            alert(res.msg);
            $author.val('');
            $editor.html('');

        },
        error(res) {
            console.log(res);
        }
    });
});