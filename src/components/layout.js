/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../components/jryan.scss"


import Header from "./header"
// import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const injectGA = () => {
    if (typeof window == 'undefined') {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-HJTVZF928W');
  };

  return (
    <>
    <Helmet>
    {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HJTVZF928W"
        />
        <script>{injectGA()}</script>


    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nova+Round&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />

    <meta name="google-site-verification" content="EtahvMSnu3hGZ5VJ74bsnZdq4VszXFfZ2q2KOqYEsjw" />

    </Helmet>

      <Header siteTitle={data.site.siteMetadata?.title || `home for the win`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 2260,
        }}
      >

        <main>{children}</main>


        <footer
          style={{
            padding:`1rem`,
            textAlign:`center`
          }}
        >
          © {new Date().getFullYear()} J. Ryan Doherty
          <p><a href="/">home</a> | <a href="/portfolio/">projects</a> | <a href="mailto:ryan@jryandoherty.com">ryan@jryandoherty.com</a></p>



          <nav class="justify-content-center d-flex">
          <ul class="nav">
            <li>
              <a href="https://www.linkedin.com/in/jrdoherty/" target="_blank" rel="noreferrer" aria-label="linkedIn">
                <svg viewBox="0 0 32 32" class="linkedIn">
                    <path id="linkedin-footer" d="M26.22362,4H5.77133A1.75177,1.75177,0,0,0,3.99985,5.72983V26.26822A1.75294,1.75294,0,0,0,5.77133,28H26.22362a1.75631,1.75631,0,0,0,1.77653-1.73177V5.72983A1.75514,1.75514,0,0,0,26.22362,4ZM11.118,24.45115H7.55811V12.99771H11.118ZM9.33887,11.432a2.06388,2.06388,0,1,1,2.06281-2.06453A2.06444,2.06444,0,0,1,9.33887,11.432Zm15.112,13.01918h-3.5573V18.88134c0-1.32878-.02441-3.03719-1.84977-3.03719-1.85237,0-2.136,1.447-2.136,2.941v5.666H13.35058V12.99771h3.41471v1.56487h.04738a3.73973,3.73973,0,0,1,3.368-1.84993c3.60464,0,4.27018,2.37223,4.27018,5.456Z" />
                </svg>
              </a>
            </li>

            <li>
              <a href="https://github.com/jryandoherty/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 32 32" class="github">
                    <path id="github-footer" d="M28,16.297a12.00154,12.00154,0,0,1-8.19942,11.38223c-.609.11718-.82514-.25609-.82514-.57691,0-.39338.01473-1.68736.01473-3.29126a2.86307,2.86307,0,0,0-.81468-2.22177c2.6733-.297,5.479-1.31121,5.479-5.92017A4.629,4.629,0,0,0,22.421,12.44971a4.30829,4.30829,0,0,0-.11941-3.17511s-1.0057-.3226-3.29666,1.2299a11.37652,11.37652,0,0,0-6.00842,0C10.70412,8.952,9.69658,9.2746,9.69658,9.2746a4.3144,4.3144,0,0,0-.11764,3.17511,4.6369,4.6369,0,0,0-1.23517,3.21937c0,4.59747,2.80132,5.62674,5.466,5.92952a2.56331,2.56331,0,0,0-.76186,1.60391,2.55528,2.55528,0,0,1-3.49232-.99687,2.52064,2.52064,0,0,0-1.83807-1.23639s-1.172-.01509-.08243.7293a3.1772,3.1772,0,0,1,1.33234,1.755s.70433,2.33328,4.04232,1.60826c.00582,1.00121.01621,1.7557.01621,2.04051,0,.31795-.219.68834-.819.57831A11.99877,11.99877,0,1,1,28,16.297Z" fill-rule="evenodd"/>
                </svg>
                </a>
            </li>

          </ul>
          </nav>

        </footer>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous" />

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
