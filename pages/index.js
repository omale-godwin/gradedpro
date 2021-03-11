import Link from "next/link";
import Carousel from "react-img-carousel";
require("react-img-carousel/lib/carousel.css");

export default function Home() {
  return (
    <>
      <div className="container">
        <Carousel viewportWidth="100%" autoplay={true} cellPadding={5}>
          <img src="images/chatbot.jpg" />
          <img src="COMPUTER.jpg" />
          <img src="images/for.jpg" />
        </Carousel>
        ,
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <button className=" m-3 btn text-center btn-primary" href="/">
            View All Project By Department
          </button>
        </div>
      </div>

      <div className="services-box-main">
        <div className="container">
          <div className="row ">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <a href="/account/">ACCOUNTING PROJECTS</a>
                </h2>
                <p>
                  Accounting project topics and materials for undergraduate and
                  post graduate students. The research project paper and seminar
                  topics and materials
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <a href="/applied/">APPLIED SCIENCE</a>
                </h2>
                <p>
                  These are Apllied Science project topics with available well
                  written chapters 1 to chapter 5, Please click on a project
                  topic to view its details and order for the complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <a href="/architech/">ARCHITECTURE PROJECT TOPICS</a>
                </h2>
                <p>
                  These are Architecture Science department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/AGRICULTURAL/">
                    <a>AGRICULTURAL SCIENCE PROJECT</a>
                  </Link>
                </h2>
                <p>
                  These are Agricultural Science department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/BANKING/">
                    <a>BANKING AND FINANCE</a>
                  </Link>
                </h2>
                <p>
                  These are Banking and Finance department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/BIOLOGY/">
                    <a>BIOLOGY PROJECT TOPICS</a>
                  </Link>
                </h2>
                <p>
                  These are Biology Science department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/BUILDING/">
                    <a>BUILDING TECHNOLOGY</a>
                  </Link>
                </h2>
                <p>
                  These are Building Technology department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/BUSINESS/">
                    <a>BUSINESS ADMINISTRATION PROJECT MATERIAL</a>
                  </Link>
                </h2>
                <p>
                  These are Business Administration department project topics
                  with available well written chapters 1 to chapter 5, Please
                  click on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/BIOCHEMISTRY/">
                    <a>BIO-CHEMISTRY PROJECT MATERIALS</a>
                  </Link>
                </h2>
                <p>
                  These are Biochemistry department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/CHEMISTRY/">
                    <a>CHEMISTRY</a>
                  </Link>
                </h2>
                <p>
                  These are Chemistry Science department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/CHEMICAL/">
                    <a>CHEMICAL ENGINEERING</a>
                  </Link>
                </h2>
                <p>
                  These are Chemical Engineering Science department project
                  topics with available well written chapters 1 to chapter 5,
                  Please click on a project topic to view its details and order
                  for the complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/CIVIL/">
                      <a>CIVIL ENGINEERING PROJECT TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Civil Engineering department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <a href="/COMPUTER/">COMPUTER SCIENCE PROJECT TOPICS</a>
                </h2>
                <p>
                  These are Computer Science department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <a href="/COMPUTERENG/">COMPUTER ENGINEERING</a>
                </h2>
                <p>
                  These are Computer Engineering Science department project
                  topics with available well written chapters 1 to chapter 5,
                  Please click on a project topic to view its details and order
                  for the complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <a href="/COMMERCE/">COMMERCE</a>
                </h2>
                <p>
                  These are COMMERCE department project topics with available
                  well written chapters 1 to chapter 5, Please click on a
                  project topic to view its details and order for the complete
                  material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/Cooperative/">
                    <a>CO-OPERATIVE ECONOMIC PROJECT TOPIC</a>
                  </Link>
                </h2>
                <p>
                  {" "}
                  Cooperative Economic department project topics with available
                  well written chapters one to chapter five, Please click on a
                  project topic to view its details and order for the complete
                  material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/crimnology/">
                    <a>
                      CRIMINOLOGY AND SECURITY STUDIES Project Topics and
                      Materials
                    </a>
                  </Link>
                </h2>
                <p>
                  CRIME CASE REPORTING AND THE OBSERVABLE IMPACT ON ITS VICTIMS
                  | CONFESSIONAL STATEMENT UTILITY IN CRIMINAL TRIALS ..{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <a href="/ECONOMICS/">ECONOMICS PROJECT TOPIC & MATERIALS</a>
                </h2>
                <p>
                  These are Economics department project topics with available
                  well written chapters 1 to chapter 5, Please click on a
                  project topic to view its details and order for the complete
                  material
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <a href="/EDUCATION/">
                    EDUCATION PROJECT TOPICS AND MATERIALS
                  </a>
                </h2>
                <p>
                  These are Education department project topics with available
                  well written chapters 1 to chapter 5, Please click on a
                  project topic to view its details and order for the complete
                  material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <a href="/ELECTRICAL/">
                    ELECTRICAL & ELECTRONICS ENGINEERING
                  </a>
                </h2>
                <p>
                  These are Electrical & Electronic Engineering Science
                  department project topics with available well written chapters
                  1 to chapter 5, Please click on a project topic to view its
                  details and order for the complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <a href="/ENGLISH/">ENGLISH LANGUAGE & LITERATURE</a>
                </h2>
                <p>
                  These are English Language & Literature department project
                  topics with available well written chapters 1 to chapter 5,
                  Please click on a project topic to view its details and order
                  for the complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/FINEART/">
                    <a>FINE & APPLIED ART</a>
                  </Link>
                </h2>
                <p>
                  These are Fine and Applied Arts department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/ENTREPRENEURSHIP/">
                    <a>ENTREPRENEURSHIP PROJECT MATERIALS</a>
                  </Link>
                </h2>
                <p>
                  These are Entertreneurship department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/ENVIRONMENTAL/">
                    <a>ENVIRONMENTAL SCIENCE</a>
                  </Link>
                </h2>
                <p>
                  These are Enviromental Science department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/">
                    <a>ENVIRONMENTAL SCIENCE PROJECT MATERIALS</a>
                  </Link>
                </h2>
                <p>
                  These are Enviromental Science department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/ESTATE/">
                    <a>ESTATE MANAGEMENT PROJECT MATERIALS</a>
                  </Link>
                </h2>
                <p>
                  These are Estate Management department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/FISHERIES/">
                    <a>FISHERIES AND AQUACULTURE PROJECTS</a>
                  </Link>
                </h2>
                <p>
                  These are Biology Science department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/FOOD/">
                    <a>FOOD TECHNOLOGY</a>
                  </Link>
                </h2>
                <p>
                  These are Food Technology department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/GEOGRAPHY/">
                    <a>GEOGRAPHY PROJECTS MATERIALS</a>
                  </Link>
                </h2>
                <p>
                  These are Geography department project topics with available
                  well written chapters 1 to chapter 5, Please click on a
                  project topic to view its details and order for the complete
                  material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/GEOLOGY/">
                    <a>GEOLOGY</a>
                  </Link>
                </h2>
                <p>
                  These are Geography department project topics with available
                  well written chapters 1 to chapter 5, Please click on a
                  project topic to view its details and order for the complete
                  material
                </p>{" "}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/HISTORY/">
                      <a>HISTORY PROJECT MATERIALS</a>
                    </Link>
                  </h2>
                  <p>
                    These are History department project topics with available
                    well written chapters 1 to chapter 5, Please click on a
                    project topic to view its details and order for the complete
                    material
                  </p>{" "}
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/HUMAN/">
                      <a>HUMAN RESOURCE MANAGEMENT</a>
                    </Link>
                  </h2>
                  <p>
                    These are Human Resources Management department project
                    topics with available well written chapters 1 to chapter 5,
                    Please click on a project topic to view its details and
                    order for the complete material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/INSURANCE/">
                      <a>INSURANCE PROJECT MATERIALS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Insurance department project topics with available
                    well written chapters 1 to chapter 5, Please click on a
                    project topic to view its details and order for the complete
                    material
                  </p>{" "}
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link
                      style={{ color: "#c73176" }}
                      href="/INDUSTRIALCHEMISTRY/">
                      <a>INDUSTRIAL CHEMISTRY PROJECT MATERIALS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Industrial Chemistry department project topics
                    with available well written chapters 1 to chapter 5, Please
                    click on a project topic to view its details and order for
                    the complete material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link
                      style={{ color: "#c73176" }}
                      href="/INDUSTRIALRELATIONS/">
                      <a>INDUSTRIAL RELATIONS & PERSON MANAGEMENT</a>
                    </Link>
                  </h2>
                  <p>
                    These are Industrial Relations and Personnel Management
                    department project topics with available well written
                    chapters 1 to chapter 5, Please click on a project topic to
                    view its details and order for the complete material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/LAW/">
                      <a>LAW PROJECT MATERIALS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Law department project topics with available well
                    written chapters 1 to chapter 5, Please click on a project
                    topic to view its details and order for the complete
                    material
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/LIBRARYSCIENCE/">
                      <a>LIBRARY SCIENCE PROJECTS MATERIALS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Library science department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link
                      style={{ color: "#c73176" }}
                      href="/INTERNATIONALRELATIONS/">
                      <a>INTERNATIONAL RELATIONS AND DIPLOMATIC STUDIES</a>
                    </Link>
                  </h2>
                  <p>
                    These are International Relation department project topics
                    with available well written chapters 1 to chapter 5, Please
                    click on a project topic to view its details and order for
                    the complete material
                  </p>{" "}
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/LINGUISTICS/">
                      <a>LINGUISTICS & COMMUNICATION</a>
                    </Link>
                  </h2>
                  <p>
                    These are Linguistic & COMMUNICATION department project
                    topics with available well written chapters 1 to chapter 5,
                    Please click on a project topic to view its details and
                    order for the complete material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/MARKETING/">
                      <a>MARKETING PROJECT MATERIALS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Marketing department project topics with available
                    well written chapters 1 to chapter 5, Please click on a
                    project topic to view its details and order for the complete
                    material
                  </p>{" "}
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/MEDICAL/">
                      <a>MEDICAL & HEALTH SCIENCE</a>
                    </Link>
                  </h2>
                  <p>
                    These are Library science department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/MASS/">
                      <a>MASS COMMUNICATION</a>
                    </Link>
                  </h2>
                  <p>
                    These are Mass Communication department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/MATHEMATICS/">
                    <a>MATHEMATICS PROJECT MATERIALS</a>
                  </Link>
                </h2>
                <p>
                  These are Mathematics department project topics with available
                  well written chapters 1 to chapter 5, Please click on a
                  project topic to view its details and order for the complete
                  material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/MECHANICAL/">
                    <a>MECHANICAL ENGINEERING PROJECT TOPICS</a>
                  </Link>
                </h2>
                <p>
                  These are Mechanical Engineering department project topics
                  with available well written chapters 1 to chapter 5, Please
                  click on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/MEDICAL/">
                    <a>MEDICAL & HEALTH SCIENCE PROJECT</a>
                  </Link>
                </h2>
                <p>
                  These are Medical And Health science department project topics
                  with available well written chapters 1 to chapter 5, Please
                  click on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/LIBRARYSCIENCE/">
                    <a>LIBRARY SCIENCE PROJECT TOPICS</a>
                  </Link>
                </h2>
                <p>
                  These are Library science department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/MICROBIOLOGY/">
                    <a>MICROBIOLOGY PROJECT MATERIALS</a>
                  </Link>
                </h2>
                <p>
                  These are Microbiology department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/NURSING/">
                    <a>NURSING PROJECT MATERIALS</a>
                  </Link>
                </h2>
                <p>
                  These are Nursing department project topics with available
                  well written chapters 1 to chapter 5, Please click on a
                  project topic to view its details and order for the complete
                  material
                </p>{" "}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/OFFICE/">
                      <a>OFFICE TECHNOLOGY MANAGEMENT TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Office Technology Management department project
                    topics with available well written chapters 1 to chapter 5,
                    Please click on a project topic to view its details and
                    order for the complete material
                  </p>{" "}
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/PHARMACEUTICAL/">
                      <a>PHARMACEUTICAL SCIENCES TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Pharmaceutical Science department project topics
                    with available well written chapters 1 to chapter 5, Please
                    click on a project topic to view its details and order for
                    the complete material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/PHILOSOPHY/">
                      <a>PHILOSOPHY PROJECT TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Philosophy department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/PHYSICS/">
                      <a>PHYSICS PROJECT TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Physics department project topics with available
                    well written chapters 1 to chapter 5, Please click on a
                    project topic to view its details and order for the complete
                    material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/POLITICAL/">
                      <a>POLITICAL SCIENCE PROJECT TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Political Science department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/PSYCHOLOGY/">
                      <a>PSYCHOLOGY PROJECT TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Psychology department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/PUBLIC/">
                      <a>PUBLIC ADMINISTRATION PROJECT TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Management department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/PUBLICHEALTH/">
                      <a>PUBLIC HEALTH PROJECT TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Public Health department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/PROJECT/">
                      <a>PROJECT MANAGEMENT </a>
                    </Link>
                  </h2>
                  <p>
                    These are Project Management department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/PURCHASING/">
                      <a>PURCHASING & SUPPLY CHAIN MANAGEMENT </a>
                    </Link>
                  </h2>
                  <p>
                    These are Purchasing & supply Chain Management department
                    project topics with available well written chapters 1 to
                    chapter 5, Please click on a project topic to view its
                    details and order for the complete material
                  </p>{" "}
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/QUANTITYSURVEY/">
                      <a>QUANTITY SURVEY PROJECT TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Quantity Survey department project topics with
                    available well written chapters 1 to chapter 5, Please click
                    on a project topic to view its details and order for the
                    complete material
                  </p>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="service-block-inner">
                  <h2 className="service-title">
                    <Link style={{ color: "#c73176" }} href="/SECREATARIAL/">
                      <a>SECREATARIAL ADMINISTRATION TOPICS</a>
                    </Link>
                  </h2>
                  <p>
                    These are Secretarial Administration department project
                    topics with available well written chapters 1 to chapter 5,
                    Please click on a project topic to view its details and
                    order for the complete material
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/SLT/">
                    <a>SCIENCE LABORATORY TECHNOLOGY</a>
                  </Link>
                </h2>
                <p>
                  These are Science Labouratory Technology department project
                  topics with available well written chapters 1 to chapter 5,
                  Please click on a project topic to view its details and order
                  for the complete material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/SOCIOLOGY/">
                    <a>SOCIOLOGY PROJECT TOPICS</a>
                  </Link>
                </h2>
                <p>
                  These are Sociology department project topics with available
                  well written chapters 1 to chapter 5, Please click on a
                  project topic to view its details and order for the complete
                  material
                </p>{" "}
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/STATISTICS/">
                    <a>STATISTICS PROJECT TOPICS</a>
                  </Link>
                </h2>
                <p>
                  These are Statistics department project topics with available
                  well written chapters 1 to chapter 5, Please click on a
                  project topic to view its details and order for the complete
                  material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/THEATRE/">
                    <a>THEATRE ARTS PROJECT TOPICS</a>
                  </Link>
                </h2>
                <p>
                  These are Theartre Arts department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/THEOLOGY/">
                    <a>THEOLOGY & BIBLICAL STUDIES TOPICS</a>
                  </Link>
                </h2>
                <p>
                  These are Theology & bible Studies department project topics
                  with available well written chapters 1 to chapter 5, Please
                  click on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/TRANSPORT/">
                    <a>TRANSPORT MANAGEMENT</a>
                  </Link>
                </h2>
                <p>
                  These are Transport Management department project topics with
                  available well written chapters 1 to chapter 5, Please click
                  on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h2 className="service-title">
                  <Link style={{ color: "#c73176" }} href="/URBAN/">
                    <a>URBAN & REGIONAL PLANNING TOPICS</a>
                  </Link>
                </h2>
                <p>
                  These are Urban & Religion Planning department project topics
                  with available well written chapters 1 to chapter 5, Please
                  click on a project topic to view its details and order for the
                  complete material
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="service-block-inner">
              <h2 className="service-title">
                <Link style={{ color: "#c73176" }} href="/VETERINARY/">
                  <a>VETERINARY MEDICINE PROJECT TOPICS</a>
                </Link>
              </h2>
              <p>
                These are Veterinary Medicine department project topics with
                available well written chapters 1 to chapter 5, Please click on
                a project topic to view its details and order for the complete
                material
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
