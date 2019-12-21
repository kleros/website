const Promise = require("bluebird");
const path = require("path");

const axios = require("axios");
const crypto = require("crypto");

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  // fetch raw data from the apis
  const fetchKlerosForum = () =>
    axios.get("https://forum.kleros.io/posts.json");

  const gitToken = "7e38f573a0b8f79d6a574e6de6c8f8742ea2509b";
  const gitOwner = "kleros";
  const gitBranch = "master";
  const fetchKlerosRepositories = () =>
    axios.get("https://api.github.com/orgs/kleros/repos?sort=updated");
  const fetchKlerosGit = gitRepo =>
    axios.get(
      "https://api.github.com/repos/" +
        gitOwner +
        "/" +
        gitRepo +
        "/commits/" +
        gitBranch +
        "?access_token=" +
        gitToken
    );

  const blogClientID = "ghost-frontend";
  const blogClientSecret = "1f107d706c2a";
  const fetchKlerosBlog = () =>
    axios.get(
      "https://blog.kleros.io/ghost/api/v0.1/posts?client_id=" +
        blogClientID +
        "&client_secret=" +
        blogClientSecret
    );

  // await for results
  const forum = await fetchKlerosForum();
  const blog = await fetchKlerosBlog();
  const repositories = await fetchKlerosRepositories();

  const git = await Promise.all(
    repositories.data.map(async repo => await fetchKlerosGit(repo.name))
  );

  // map into these results and create nodes
  blog.data.posts.map((blog_post, i) => {
    var caNode = {
      id: `klerosBlog${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `KlerosBlogPosts` // name of the graphQL query --> allKlerosGitCommits {}
      },
      children: [],

      post_title: blog_post.title,
      post_date: blog_post.published_at,
      post_url: blog_post.url
    };

    var contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(caNode))
      .digest(`hex`);
    caNode.internal.contentDigest = contentDigest;

    createNode(caNode);
  });
  git
    .map(response => response.data)
    .map((commit, i) => {
      var caNode = {
        id: `klerosGit${i}`,
        parent: `__SOURCE__`,
        internal: {
          type: `KlerosGitCommits` // name of the graphQL query --> allKlerosGitCommits {}
        },
        children: [],

        commit_text: commit.commit.message,
        commit_date: commit.commit.committer.date,
        commit_url: commit.html_url
      };

      var contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(caNode))
        .digest(`hex`);
      caNode.internal.contentDigest = contentDigest;

      createNode(caNode);
    });
  forum.data.latest_posts.map((forum_posts, i) => {
    // Create your node object
    var caNode = {
      // Required fields
      id: `klerosForum${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `KlerosForumTopic` // name of the graphQL query --> allKlerosForumTopic {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      created_at: forum_posts.created_at,
      topic_data: forum_posts.cooked,
      topic_id: forum_posts.topic_id,
      topic_slug: forum_posts.topic_slug,
      topic_title: forum_posts.topic_title
    };

    // Get content digest of node. (Required field)
    var contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(caNode))
      .digest(`hex`);
    // add it to caNode
    caNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(caNode);
  });

  return;
};
