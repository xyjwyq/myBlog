let tagCloud = new Vue({
    el: '#tag_cloud',
    data() {
        return {
            tags: ['abc', 'def'],
            styleObj: {
                transition: 'all 2s ease'
            },
            tagStyles: []
        }
    },
    computed: {

    },
    methods: {
        init() {
            let _this = this;
            setInterval(function () {
                let color = createColorWithooutBloak();
                _this.$set(_this.styleObj, 'color', color);
            }, 2000);
            this.createTagStyles();
        },
        getUrl(tag) {
            return '/getBlogByTag?tag=' + tag;
        },
        getRandomColorAndSize() {
            let color = createColorWithooutBloak(),
                fontSize = createFintSize();
            return {
                color,
                fontSize
            }
        },
        createTagStyles() {
            if (this.tags.length === 0) return;
            this.tags.forEach((tag) => {
                this.tagStyles.push(this.getRandomColorAndSize());
            });
        }
    },
    created() {
        this.init();
    }
});


let hot = new Vue({
    el: '#hot',
    data() {
        return {
            hotList: [
                {
                    title: '查看你的AWS服务器已使用流量',
                    link: '/'
                },
                {
                    title: '使用码云git的webhook实现生产环境代',
                    link: '/'
                },
                {
                    title: 'VirtualBox压缩vmdk、vagrant打包b',
                    link: '/'
                },
                {
                    title: 'python+selenium自动登录qq空间并下载',
                    link: '/'
                },
            ],
            styleObj: {
                transition: 'all 2s ease'
            }
        }
    },
    methods: {
        init() {
            let _this = this;
            setInterval(function () {
                let color = createColorWithooutBloak();
                _this.$set(_this.styleObj, 'color', color);
            }, 2000);
        }
    },
    created() {
        this.init();
    }
});

let comment = new Vue({
    el: '#comment',
    data() {
        return {
            comments: [
                {
                    username:'a',
                    date: '2018-10-10',
                    content: '好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主',
                    link:'/'
                },
                {
                    username:'b',
                    date: '2018-10-11',
                    content: '好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主',
                    link:'/'
                },
                {
                    username:'c',
                    date: '2018-10-12',
                    content: '好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主',
                    link:'/'
                },
            ],
            styleObj: {
                transition: 'all 2s ease'
            }
        }
    },
    methods: {
        init() {
            let _this = this;
            setInterval(function () {
                let color = createColorWithooutBloak();
                _this.$set(_this.styleObj, 'color', color);
            }, 2000);
        }
    },
    created() {
        this.init();
    }
});
















