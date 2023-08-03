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
    toPath: `/portfolio/`,

    fromPath: `/portfolio/emails/cloud.php`,
    toPath: `/portfolio/`,

    fromPath: `/portfolio/emails/bucket.php`,
    toPath: `/portfolio/`,

    fromPath: `/portfolio/emails/trucks.php`,
    toPath: `/portfolio/`,

    fromPath: `/portfolio/emails/bdc.php`,
    toPath: `/emails/bdc/`,

    fromPath: `/portfolio/conversion/hornet.php`,
    toPath: `/portfolio/`,

    fromPath: `/portfolio/conversion/copernicus.php`,
    toPath: `/portfolio/`,

    fromPath: `/portfolio/conversion/construction-portal.php`,
    toPath: `/portfolio/`,

    fromPath: `/portfolio/conversion/truck_portal.php`,
    toPath: `/portfolio/`,

    fromPath: `/portfolio/conversion/bdc_price_quotes.php`,
    toPath: `/conversion/bdc-price-quotes/`,

    fromPath: `/portfolio/sites/avian_records.php`,
    toPath: `/sites/avian-records/`,

    fromPath: `/portfolio/sites/bdc_community.php`,
    toPath: `/sites/bdc-community/`,

    fromPath: `/portfolio/sites/bdc_partner.php`,
    toPath: `/portfolio/`,

    fromPath: `/portfolio/sites/buyerzone_home_2015.php`,
    toPath: `/sites/buyerzone-2015/`,

    fromPath: `/portfolio/sites/grab_cad_blog.php`,
    toPath: `/sites/grabcad/`,

    fromPath: `/portfolio/sites/buyerzone_leads_2016.php`,
    toPath: `/portfolio/`,

    fromPath: `/portfolio/sites/louis_mian.php`,
    toPath: `/sites/louis-mian/`,

    fromPath: `/portfolio/sites/roger_buttles.php`,
    toPath: `/sites/roger-buttles/`,

    fromPath: `portfolio/sites/dzone.php`,
    toPath: `/portfolio/`,

  })
}
