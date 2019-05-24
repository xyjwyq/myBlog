let $sendBlogBtn = $('#sendBlogBtn'),
    $blogTitle = $('#title'),
    $blogTags = $('#tags'),
    $editor = $('#editor'),
    firstFocus = false;

$editor.on('focus', function () {
    if(!firstFocus){
        firstFocus = true;
        $(this).html('');
    }

});

$sendBlogBtn.on('click', function () {
    let title = $blogTitle.val(),
        tags = $blogTags.val().trim(),
        content = $editor.html(),
        params = {
            title,
            tags,
            content
        };
    console.log(params);
    $.ajax({
        url: '/editBlog',
        method: 'post',
        data: JSON.stringify(params),
        success: function (resp) {
            res = JSON.parse(resp);
            alert(res.msg);
            $blogTitle.val('');
            $blogTags.val('');
            $editor.html('');
            firstFocus = false;
        },
        error: function (resp) {
            console.log(resp);
        }
    });
});