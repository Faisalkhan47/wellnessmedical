import { Link } from "react-router-dom";
import logo from "./1000041174.svg"


export default function Footer() {

  return (
    <>

      <footer className="footer" >
        <section>
          <div className="container-fluid" >
            <div className="row">
              <div className="col-12 col-lg-4 py-4 py-md-5 py-xxl-8" style={{ backgroundColor: 'rgb(151, 17, 20)' }}>
                <div className="row h-100 align-items-end justify-content-center">
                  <div className="col-12 col-md-11 col-xl-10">
                    <div className="footer-logo-wrapper" >
                      <Link to="/">
                        <img src={logo} alt="" width="150" height="120" />
                      </Link>
                    </div>
                    <div className="social-media-wrapper" style={{ marginTop: "2.5rem" }}>
                      <ul className="nav">
                        <li className="nav-item me-3">
                          <Link className="nav-link link-primary p-2 bg-light rounded" to="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </Link>
                        </li>
                        <li className="nav-item me-3">
                          <Link className="nav-link link-primary p-2 bg-light rounded" to="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>
                          </Link>
                        </li>
                        <li className="nav-item me-3">
                          <Link className="nav-link link-primary p-2 bg-light rounded" to="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link link-primary p-2 bg-light rounded" to="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.704-.275-1.485-.038-.843-.046-1.096-.046-3.232s.008-2.389.046-3.232c.036-.78.166-1.203.275-1.485.145-.374.319-.64.6-.92.28-.28.546-.453.919-.599.282-.11.705-.24 1.485-.275.843-.039 1.096-.046 3.232-.046zm0 1.442c-2.096 0-2.322.008-3.138.046-.653.03-1.007.15-1.244.247-.313.123-.536.27-.774.507a2.443 2.443 0 0 0-.506.774c-.097.237-.217.59-.247 1.244-.038.816-.046 1.041-.046 3.138 0 2.095.008 2.322.046 3.138.03.653.15 1.007.247 1.244.123.313.27.536.506.774.238.237.461.383.774.507.237.097.591.217 1.244.247.816.038 1.042.046 3.138.046 2.095 0 2.322-.008 3.138-.046.653-.03 1.007-.15 1.244-.247.313-.123.536-.27.774-.507.237-.237.383-.461.507-.774.097-.237.217-.591.247-1.244.038-.816.046-1.043.046-3.138 0-2.097-.008-2.322-.046-3.138-.03-.653-.15-1.007-.247-1.244-.123-.313-.27-.536-.507-.774a2.436 2.436 0 0 0-.774-.506c-.237-.097-.591-.217-1.244-.247-.816-.038-1.042-.046-3.138-.046zM8 3.834a4.166 4.166 0 1 0 0 8.332 4.166 4.166 0 0 0 0-8.332zm0 1.445a2.721 2.721 0 1 1 0 5.443 2.721 2.721 0 0 1 0-5.443zm5.349-.807a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 py-4 py-md-5 py-xxl-8" style={{ backgroundColor: 'rgb(151, 17, 20)' }}>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-11 col-xxl-10">
                    <div className="row gy-4 gy-sm-0">
                      <div className="col-6 col-sm-3">
                        <div className="widget">
                          <h4 className="widget-title mb-4 link-light">Information</h4>
                          <ul className="list-unstyled">
                            <li className="mb-3">
                              <Link to="/about" className="link-light text-decoration-none">About</Link>
                            </li>
                            <li className="mb-3">
                              <Link to="/about" className="link-light text-decoration-none">Our Services</Link>
                            </li>
                            <li className="mb-3">
                              <Link to="https://wa.me/9643486864" className="link-light text-decoration-none">Help</Link>
                            </li>
                            <li className="mb-3">
                              <Link to="#!" className="link-light text-decoration-none">Team</Link>
                            </li>
                            <li className="mb-3">
                              <Link to="#!" className="link-light text-decoration-none">Doctors</Link>
                            </li>
                            <li className="mb-3">
                              <Link to="/hospitals" className="link-light text-decoration-none">Hospitals</Link>
                            </li>
                            <li className="mb-0">
                              <Link to="#!" className="link-light text-decoration-none">Contact Us</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="widget">
                          <h4 className="widget-title mb-4 link-light">Languages</h4>
                          <ul className="list-unstyled">
                            <li className="mb-3">
                              <Link to="#!" className="link-light text-decoration-none">Contact</Link>
                            </li>
                            <li className="mb-3">
                              <Link to="#!" className="link-light text-decoration-none">Advertise</Link>
                            </li>
                            <li class="mb-3">
                              <Link to="#!" className="link-light text-decoration-none">Events</Link>
                            </li>
                            <li className="mb-3">
                              <Link to="#!" className="link-light text-decoration-none">Careers</Link>
                            </li>
                            <li className="mb-3">
                              <Link to="#!" className="link-light text-decoration-none">Terms of Service</Link>
                            </li>
                            <li className="mb-0">
                              <Link to="#!" className="link-light text-decoration-none">Privacy Policy</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6" >
                        <div className="widget">
                          <div className="address-wrapper mt-1 ms-0 ms-md-4">
                            <address className="mb-2 text-white">Ground Floor, B-74, Shaheen Bagh, Jamia Nagar, Okhla, New Delhi, Delhi 110025</address>
                            <p className="mb-2">
                              <Link className="link-light text-decoration-none" to="tel:+919953367487">
                                +919953367487
                              </Link>
                            </p>
                            <p className="mb-0">
                              <Link className="link-light text-decoration-none" to="mailto:demo@yourdomain.com">demo@yourdomain.com</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-6 border-top border-light-subtle">
                      <div className="footer-copyright-wrapper mt-6 link-light">
                        &copy; 2024. All Rights Reserved.
                      </div>
                      <div className="credits link-light mt-2 fs-7">
                        Built by <Link to="https://bootstrapbrain.com/" className="link-light text-decoration-none">BootstrapBrain</Link> with <span className="text-primary">&#9829;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}