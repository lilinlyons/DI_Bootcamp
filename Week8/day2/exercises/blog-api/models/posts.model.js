const { db } = require("../config/db.js");

const _getAllPosts = () => {
    return db("posts").select("id", "title", "content").orderBy("id");
};

const _getOnePost = (post_id) => {
    return db("posts")
        .select("id", "title", "content")
        .where({ id: post_id });
};

const _insertPost = (title,content) => {
    return db('posts').insert({title,content},["id","title","content"])
}

const _updatePost = (post_id, title, content) => {
    return db("posts")
        .where({ id: post_id})
        .update({title,content}, ["id","title","content"])

};


const _deletePost = (post_id) => {
    return db('posts').where({ id: post_id }).delete(["id","title","content"])
}


module.exports = {
    _getAllPosts,
    _getOnePost,
    _insertPost,
    _updatePost,
    _deletePost
};
