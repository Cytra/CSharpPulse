import BootstrapIcon from "@/components/BootstrapIcon";
import menu from "@/config/menus.json";
import siteConfig from "@/config/site.config.json";
import subscription from "@/config/subscription.json";
import { ArrowUpRight } from "@/utils/Icons";
import Link from "next/link";

const Footer = () => {
  const { copyright, socialLinks } = siteConfig;

  return (
    <footer className="bg-white">
      <div className="line-bg">
        <div className="newsletter-block border-bottom">
          <div className="container">
            <div className="row gy-5 align-items-center justify-content-center text-center text-md-start">



              {/* <div className="col-xl-5 col-lg-5 col-md-6 col-sm-10">
                <div className="pe-0 pe-xl-4">
                  <h2 className="mb-3 lh-sm">{subscription.title}</h2>
                  <p className="mb-0">{subscription.subtitle}</p>
                </div>
              </div> */}

              {/* <div class="sib-form">
                <div id="sib-form-container" class="sib-form-container">
                  <div id="sib-container" class="sib-container--large sib-container--vertical">
                    <form id="sib-form" method="POST" action="https://d1784039.sibforms.com/serve/MUIEADpLsKih0oIjmI75Cxbgyytf6WRaJhjBCJSzWiTza06EZ18ShRus9XpQnDsts7fylWLX5z3l9b_-pk30ecEgKjgKFceNdjlSCgxSM_fBnzXJ-SM9y1ASckGZ7doItdR_UQ_DQkDMTd3WF2gzOS7eV2G-DcCIwoCn7GC1u-mXS8Paq7Zk4mezJUN4zdd1XKeKUmD1TzG68Bxf">
                      <div>
                        <div class="sib-form-block">
                          <p>C# Pulse</p>
                        </div>
                      </div>
                      <div>
                        <div class="sib-form-block">
                          <div class="sib-text-form-block">
                            <p>A carefully curated weekly newsletter for .NET developers to help you learn.</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="sib-input sib-form-block">
                          <div class="form__entry entry_block">
                            <div class="form__label-row ">
                              <label class="entry__label" for="EMAIL" data-required="*">Enter your email address to subscribe</label>

                              <div class="entry__field">
                                <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                              </div>
                            </div>

                            <label class="entry__error entry__error--primary">
                            </label>
                            <label class="entry__specification">
                              Provide your email address to subscribe. For e.g abc@xyz.com
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="sib-form-block">
                          <button class="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
                            <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                              <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                            </svg>
                            SUBSCRIBE
                          </button>
                        </div>
                      </div>
                      <input type="text" name="email_address_check" value="" class="input--hidden"></input>
                      <input type="hidden" name="locale" value="en"></input>
                      <input type="hidden" name="html_type" value="simple"></input>
                    </form>
                  </div>
                </div>
              </div> */}






              {/* <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="ps-0 ps-xl-4">
                  <div id="mc_embed_signup">
                    <form
                      action={subscription.mailChimpFormAction}
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      target="_blank"
                    >
                      <div id="mc_embed_signup_scroll" className="input-group">
                        <input
                          type="email"
                          name="EMAIL"
                          className="form-control w-100 required email"
                          id="mce-EMAIL"
                          placeholder={subscription.formEmailPlaceholder}
                          aria-label="Subscription"
                          autoComplete="new-email"
                          required
                        />
                        <div id="mce-responses" className="clear">
                          <div
                            className="response"
                            id="mce-error-response"
                            style={{ display: "none" }}
                          ></div>
                          <div
                            className="response"
                            id="mce-success-response"
                            style={{ display: "none" }}
                          ></div>
                        </div>
                        <div
                          style={{ position: "absolute", left: "-5000px" }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name={subscription.mailChimpFormName}
                            tabIndex="-1"
                          />
                        </div>
                        <div className="input-group-append w-100">
                          <button
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="input-group-text w-100 mb-0"
                            aria-label="Subscription Button"
                          >
                            {subscription.formButtonLabel}
                            <ArrowUpRight className="ms-auto" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-4 order-2 order-lg-1 text-center text-lg-start">
              <p className="mb-0 copyright-text">{copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
