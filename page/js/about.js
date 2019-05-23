let aboutComment = new Vue({
    el: '#about_comment',
    data() {
        return {
            comments: [
                {
                    username: 'aaaa',
                    date: '2019-5-22',
                    parent: -1,
                    link: '/about.html',
                    content: 'dgdagfdgfdhgfdshgfhgfhfghgf'
                },
                {
                    username: 'bbb',
                    date: '2019-5-22',
                    parent: -1,
                    link: '/about.html',
                    content: 'hkjhgtutryuhbgfhfdhrtyerytr'
                },
                {
                    username: 'cccc',
                    date: '2019-5-22',
                    parent: 1,
                    link: '/about.html',
                    content: 'dsgdsgdsrsrtertewrterwte'
                },
                {
                    username: 'ddddd',
                    date: '2019-5-22',
                    parent: -1,
                    link: '/about.html',
                    content: 'dgfdhgfdsgfdshtrhyrthrtherthrt'
                }
            ]
        }
    },
    methods: {

    },
    created() {

    }
});