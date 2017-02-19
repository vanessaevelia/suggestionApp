app.factory('suggestions', [function () {
    var demoSuggestions = {
        userName: "paperANDpen",
        myEntries: [
            {
                subject: 'Looking for a book similar to A Tale for the Time Being by Ruth Ozeki',
                category: 'books',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend id massa a eleifend. Maecenas rutrum quam eget sapien aliquet, eget tempor orci euismod. Praesent sagittis bibendum sagittis. Nunc at imperdiet odio, eu sagittis lectus. Vestibulum id magna placerat, rutrum nisi non, condimentum leo.',
                posts: [
                    {
                        title: 'Unexploded by Alison Macleod',
                        likes: 15,
                        comments: [
                            {
                                body: 'Really good. Agreed',
                                likes: 8
                            },
                            {
                                body: 'I\'ve never heard of this one',
                                likes: 2
                            },
                            {
                                body: 'eh lol',
                                likes: 3
                            }
                        ]
                    },
                    {
                        title: 'Almost English by Charlotte Medelson',
                        likes: 9,
                        comments: []
                    },
                    {
                        title: 'Shanghai Girls - Lisa See',
                        likes: 7,
                        comments: []
                    },
                    {
                        title: 'The Setting Sun',
                        likes: 3,
                        comments: []
                    }
            ]
        },
        {
            subject: "Want to watch foreign historical films",
            category: "movies",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend id massa a eleifend. Maecenas rutrum quam eget sapien aliquet, eget tempor orci euismod. Praesent sagittis bibendum sagittis. Nunc at imperdiet odio, eu sagittis lectus. Vestibulum id magna placerat, rutrum nisi non, condimentum leo.",
            posts: []
        }
    ]
    };
    return demoSuggestions;
}]);
