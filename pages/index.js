import Layout from "@/components/Layout";
import { getPosts } from "@/libs/getPosts";
import { getSinglePage } from "@/libs/getSinglePage";
import ParseMarkdown from "@/utils/parseMarkdown";

const HomeTwo = ({ homepage, posts }) => {
  const { content } = homepage;

  const navigateToPage = () => {
    window.location.href = "https://d1784039.sibforms.com/serve/MUIEADpLsKih0oIjmI75Cxbgyytf6WRaJhjBCJSzWiTza06EZ18ShRus9XpQnDsts7fylWLX5z3l9b_-pk30ecEgKjgKFceNdjlSCgxSM_fBnzXJ-SM9y1ASckGZ7doItdR_UQ_DQkDMTd3WF2gzOS7eV2G-DcCIwoCn7GC1u-mXS8Paq7Zk4mezJUN4zdd1XKeKUmD1TzG68Bxf";
  }

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 text-center">
              <p className="mb-2">Stay up to date with the latest news, updates, and tips for .NET developers. Subscribe now to receive our monthly newsletter straight to your inbox!</p>
              <h1 className="h2 text-dark mb-4">Subscribe to our monthly newsletter</h1>
              <ParseMarkdown
                tagName="div"
                className="content"
                content={content}
              />
              <div className="nav d-flex d-sm-inline-flex">
                <button
                  type="submit"
                  className="btn btn-light bg-white btn-lg"
                  aria-label="Send Message"
                  onClick={() => navigateToPage()}
                >Subscribe!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default HomeTwo;

// Export Props
export const getStaticProps = () => {
  return {
    props: {
      homepage: getSinglePage("content/_index-2.md"),
      posts: getPosts(),
    },
  };
};
