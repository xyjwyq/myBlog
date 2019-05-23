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
    computed: {},
    methods: {
        init() {
            let _this = this;
            setInterval(function () {
                let color = createColorWithooutBloak();
                _this.$set(_this.styleObj, 'color', color);
            }, 2000);
        },
        getData() {
            let _this = this;
            axios.get('/getAllTag').then(function (res) {
                _this.tags = res.data.data;
                _this.createTagStyles();
            });
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
            this.tags.forEach(() => {
                this.tagStyles.push(this.getRandomColorAndSize());
            });
        }
    },
    created() {
        this.init();
        this.getData();
    }
});


let hot = new Vue({
    el: '#hot',
    data() {
        return {
            hotList: [],
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
        },
        getData() {
            let _this = this;
            axios.get('/getNewHotBlog').then(function (res) {
                _this.hotList = dataHandler.hot(res.data.data);
                console.log(_this.hotList);
            });
        }
    },
    created() {
        this.init();
        this.getData();
    }
});

let comment = new Vue({
    el: '#comment',
    data() {
        return {
            comments: [
                {
                    username: 'a',
                    date: '2018-10-10',
                    content: '好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主',
                    link: '/'
                },
                {
                    username: 'b',
                    date: '2018-10-11',
                    content: '好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主',
                    link: '/'
                },
                {
                    username: 'c',
                    date: '2018-10-12',
                    content: '好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主好的，谢谢博主',
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
















