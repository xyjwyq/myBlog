let $sendBlogBtn = $('#sendBlogBtn'),
    $blogTitle = $('#title'),
    $blogTags = $('#tags'),
    $editor = $('#editor');

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
            console.log(resp);
        },
        error: function (resp) {
            console.log(resp);
        }
    });
});