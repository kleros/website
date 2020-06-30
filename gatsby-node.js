/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
//
//

const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(node.internal.type);
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: "markdown" });
    console.log(slug);

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/post.js"),
          context: {
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
