exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}


// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;

	createRedirect({
    fromPath: `/portfolio/emails/office_cubicles.php`,
    toPath: `/emails/office-cubicles/`,

    fromPath: `/portfolio/emails/cloud.php`,
    toPath: `/emails/cloud/`,

    fromPath: `/portfolio/emails/bucket.php`,
    toPath: `/emails/bucket/`,

    fromPath: `/portfolio/emails/trucks.php`,
    toPath: `/emails/trucks/`,

    fromPath: `/portfolio/emails/bdc.php`,
    toPath: `/emails/bdc/`,

  });
}
