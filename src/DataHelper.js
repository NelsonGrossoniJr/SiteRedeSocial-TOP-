const FilePath = '/data/'

export default class DataHelper {

    async tryLogin(tryUser) {
        let allUsers = await this.getAllUsers()

        let validUser = false

        allUsers.forEach((user) => {
            if ((user.user_name == tryUser.user_name) &&
                (user.password == tryUser.password)) {
                validUser = user
            }
        })
        return validUser
    }

    async getAllUsers() {
        const response = await fetch(FilePath+'users.json');
        const userData = await response.json()
        return userData
    }

    async getUserById(user_id) {
        let response = await fetch(FilePath + 'users.json');

        let wantedUser = response.json()
            .then(allUsers => {
                let u = null;
                allUsers.forEach(item => {
                    if (item.id == user_id) { u = item }
                })
                return u;
            })

        return wantedUser
    }

    async getAllGames() {
        const response = await fetch(FilePath + 'games.json');
        const games = await response.json()
        return games
    }
    async getGameById(game_id) {
        const response = await fetch(FilePath + '/games.json');

        let game = response.json()
            .then(allGames => {
                let g = null;
                allGames.forEach(item => {
                    if (item.id == game_id) { g = item }
                })
                return g;
            })

        return game
    }

    async getGameListByIds(game_ids) {
        const response = await fetch(FilePath + 'games.json');
        const games = await response.json()
        let returnList = games.filter((g) => game_ids.includes(g.id))
        return returnList
    }


    async getAllPosts() {
        let response = await fetch(FilePath + 'posts.json');
        const postsData = await response.json();
        return postsData
    }
    async getPostByUserId(user_id) {
        const response = await fetch(FilePath + 'posts.json');
        let noPosts = await response.json()
        let posts = noPosts.map(item => this.LoadPost(item))
        let loadedPosts = await Promise.all(posts)

        let r = loadedPosts.filter((p) => (p.user_id == user_id))
        return r
    }
    async getPostByGameId(game_id) {
        const response = await fetch(FilePath + 'posts.json');

        let posts = response.json()
            .then(allPosts => {
                let p = [];
                allPosts.forEach(item => {
                    if (item.game_id == game_id) { p.push(item) }
                })
                return p;
            })

        return posts
    }

    async getUserFeed(user_id) {
        // pegar usuario
        // pegar jogos preferidos
        // pegar posts de amigos
        // filtrar posts antigos
        // embaralhar
        let allPosts = await this.getAllPosts()
        let FilledPostsP = allPosts.map((p) => { return this.LoadPost(p) })

        let feed = await Promise.all(FilledPostsP)

        return feed
    }
    async getFriendsByUserId(user_id) {
        let user = await this.getUserById(user_id)
        let response = await fetch(FilePath + 'users.json');
        let friends = response.json()
            .then(allUsers => {
                let returnList = []
                allUsers.forEach(item => {
                    if (user.friends.includes(item.id)) {
                        returnList.push(item)
                    }
                })
                return returnList;
            })

        return friends
    }



    async LoadPost(post) {

        let PostReturn = post
        let gameP = this.getGameById(post.game_id)
        let userP = this.getUserById(post.user_id)
        let allUsersP = this.getAllUsers()

        let allUsers = await allUsersP
        let game = await gameP
        let user = await userP


        PostReturn.game = game
        PostReturn.user = user


        for (let i = 0; i < PostReturn.comments.length; i++) {
            let userI = allUsers.filter((u) => u.id == PostReturn.comments[i].user_id)
            PostReturn.comments[i].user = userI[0]
        }
        return PostReturn

    }

    async UpdatePost(post) {
        const response = await fetch( FilePath + '.json' );

        let posts = response.json()
            .then(allPosts => {
                let p = [];
                allPosts.forEach(item => {
                    if (item.user_id == user_id) {
                        p.push(item)
                    }
                })
                return p;
            })

        return posts
    }

}