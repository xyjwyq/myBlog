let everyDay = new Vue({
    el: '#every_day',
    data() {
        return {
            content: '',
            author: '',
            styleObj: {
                color: '#000',
                transition: 'all 2s ease'
            }
        }
    },
    computed: {
        getContent() {
            return this.content;
        },
        getAuthor() {
            return this.author;
        }
    },
    methods: {
        init() {
            //    每隔2s重新设置每日一句标题颜色值
            this.changeEveryDayColor();
        },
        getData() {
            let _this = this;
            axios.get('/queryEveryday').then(function (res) {
                let item = res.data.data[0];
                _this.content = item.content;
                _this.author = item.author;
            });
        },
        randomColor() {
            let r = Math.floor(Math.random() * 230),
                g = Math.floor(Math.random() * 230),
                b = Math.floor(Math.random() * 230);
            return `rgb(${r}, ${g}, ${b})`;
        },
        changeEveryDayColor() {
            let _this = this;
            setInterval(function () {
                let colorVal = _this.randomColor();
                _this.styleObj.color = colorVal;
            }, 2000);
        }
    },
    created() {
        this.init();
        //    发送ajax请求，获取每日一句内容
        this.getData();
    }
});

let articleList = new Vue({
    el: '#article_list',
    data() {
        return {
            articles: [],
            pagination: {
                total: 100,
                pageSize: 5,
                currentPage: 1
            }
        }
    },
    computed: {
        getTotalPage() {
            return Math.ceil(this.pagination.total / this.pagination.pageSize);
        }
    },
    methods: {
        async init() {
            let resCount = await this.getBlogCount();
            this.pagination.total = resCount.data.data[0].blogCount;
            let resArticles = await this.getBlogData();
            this.articles = dataHandler.blog(resArticles.data.data);
        },
        getBlogData() {
            let page = this.pagination.currentPage - 1,
                pageSize = this.pagination.pageSize;
            return axios.get(`/getBlogListByPage?page=${page}&pageSize=${pageSize}`);
        },
        getBlogCount() {
            return axios.get('/getBlogCount');
        },
        async prePage() {
            this.pagination.currentPage--;
            let res = await this.getBlogData();
            this.articles = dataHandler.blog(res.data.data);
        },
        async nextPage() {
            this.pagination.currentPage++;
            let res = await this.getBlogData();
            this.articles = dataHandler.blog(res.data.data);
        },
        async jumpPage(page) {
            this.pagination.currentPage = page;
            let res = await this.getBlogData();
            this.articles = dataHandler.blog(res.data.data);
        }
    },
    created() {
        this.init();

    }
});