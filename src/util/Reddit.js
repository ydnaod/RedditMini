


export const Reddit = {
    async getPage(){
        return fetch(`https://www.reddit.com/r/popular.json`)
        .then(response => response.json())
        .then(jsonResponse => {
            return await jsonResponse.data.children.map(post => ({
                title: post.title,
                name: post.name,
                ups: post.ups,
            }))
        })
    },
}