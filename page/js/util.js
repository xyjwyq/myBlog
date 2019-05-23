function createColorWithooutBloak() {
    //除白色
    let r = Math.floor(Math.random() * 230 + 25),
        g = Math.floor(Math.random() * 230 + 25),
        b = Math.floor(Math.random() * 230 + 25);
    return `rgb(${r}, ${g}, ${b})`;
}

function createFintSize() {
    let size = Math.floor(Math.random() * 20 + 12);
    return `${size}px`
}

const dataHandler = {};
dataHandler.blog = function (blogList) {
    if (!blogList || !Array.isArray(blogList) || blogList.length === 0) return [];
    blogList.forEach(function (blog) {
        blog.tags = blog.tags.split(',');
        blog.date = new Date(parseInt(blog.c_time)*1000).toLocaleString().replace(/:\d{1,2}$/,' ');
        blog.link = `/blog_detail.html?blog_id=${blog.id}`;
    });
    return blogList;
};
