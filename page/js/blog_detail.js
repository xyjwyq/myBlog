let blogDetail = new Vue({
    el: '#blog_detail',
    data() {
        return {
            blog: ''
        }
    },
    computed: {
        getBlogDetail() {
            return this.blogContent;
        }
    },
    methods: {
        getData() {
            let _this = this;
            let search = location.search;
            axios.get('/getBlogById' + search).then(function (res) {
                console.log(res.data.data);
                _this.blog = dataHandler.blogDetail(res.data.data)[0];
            });
        }
    },
    created() {
        this.getData();
    }
});