let siteMap = new Vue({
    el: '#siteMap_wrapper',
    data() {
        return {
            blogList: []
        }
    },
    methods: {
        getData() {
            let _this = this;
            axios.get('/getBlogMap').then(function (res) {
                _this.blogList = dataHandler.blogMap(res.data.data);
            });
        }
    },
    created() {
        this.getData();
    }
});