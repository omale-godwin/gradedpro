import Link from "next/link";
import Carousel from "react-img-carousel";
require("react-img-carousel/lib/carousel.css");

export default function Home() {
  return (
    <>
      <div className="container">
        <Carousel viewportWidth="100%" autoplay={true} cellPadding={5}>
          <img src="https://placekitten.com/200/300" />
          <img src="https://placekitten.com/300/300" />
          <img src="https://placekitten.com/400/300" />
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/Agriculture/Agriculture">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/BankingandFinance/BankingandFinance">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/Biochemistry/Biochemistry">
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
                  <Link style={{ color: "#c73176" }} href="/Building/Building">
                    <a>BUILDING TECHNOLOGY</a>
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
                <h2 className="service-title">
                  <Link
                    style={{ color: "#c73176" }}
                    href="/BusinessAdministrationandManagement/BusinessAdministrationandManagement">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/Biochemistry/Biochemistry">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/CHEMISTRY/CHEMISTRY">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/chemical_engineering/ChemicalEngineering">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/CivilEngineering/CivilEngineering">
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
                  <a href="/computer/">COMPUTER SCIENCE PROJECT TOPICS</a>
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/COMPUTERENGINEERING/COMPUTERENGINEERING">
                    <a>COMPUTER ENGINEERING</a>
                  </Link>
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
                  <Link style={{ color: "#c73176" }} href="/COMMERCE/COMMERCE">
                    <a>COMMERCE</a>
                  </Link>
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/CooperativeEconomic/CooperativeEconomic">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/CRIMINOLOGY/CRIMINOLOGY">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/Economics/Economics">
                    <a>ECONOMICS PROJECT TOPIC & MATERIALS</a>
                  </Link>
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/Education/Education">
                    <a>EDUCATION PROJECT TOPICS AND MATERIALS</a>
                  </Link>
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/ELECTRICAL/ELECTRICAL">
                    <a>ELECTRICAL & ELECTRONICS ENGINEERING</a>
                  </Link>
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
                  <Link style={{ color: "#c73176" }} href="/ENGLISH/ENGLISH">
                    <a>ENGLISH LANGUAGE & LITERATURE</a>
                  </Link>
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/FineandAppliedArts/FineandAppliedArts">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/ENTREPRENEURSHIP/ENTREPRENEURSHIP">
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
                  <Link style={{ color: "#c73176" }} href="/accountings/">
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
                  <Link style={{ color: "#c73176" }} href="/accountings/">
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
                  <Link style={{ color: "#c73176" }} href="/accountings/">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/FisheryandAquacultur/FisheryandAquacultur">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/FoodTechnology/FoodTechnology">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/Geography/Geography">
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
                  <Link style={{ color: "#c73176" }} href="/GEOLOGY/GEOLOGY">
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
                    <Link style={{ color: "#c73176" }} href="/HISTORY/HISTORY">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/HUMANRESOURCEMANAGEMENT/HUMANRESOURCEMANAGEMENT">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/INSURANCE/INSURANCE">
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
                      href="/IndustrialChemistry/IndustrialChemistry">
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
                      href="/IndustrialRelationsandPersonneManagement/IndustrialRelationsandPersonneManagement">
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
                    <Link style={{ color: "#c73176" }} href="/LAW/LAW">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/LIBRARYSCIENCE/LIBRARYSCIENCE">
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
                      href="/INTERNATIONALRELATIONS/INTERNATIONALRELATIONS">
                      <a>INTERNATIONAL RELATIONS</a>
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/LINGUISTICSCOMMUNICATION/LINGUISTICSCOMMUNICATION">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/MARKETING/MARKETING">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/MedicalandHealthScience/MedicalandHealthScience">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/mass_comm/MassCommunication">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/MATHEMATICS/MATHEMATICS">
                    <a>MATHEMATICSPROJECT MATERIALS</a>
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/MECHANICALENGINEERING/MECHANICALENGINEERING">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/MedicalandHealthScience/MedicalandHealthScience">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/LIBRARYSCIENCE/LIBRARYSCIENCE">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/MICROBIOLOGY/MICROBIOLOGY">
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
                  <Link style={{ color: "#c73176" }} href="/NURSING/NURSING">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/OFFICETECHNOLOGYMANAGEMENT/OFFICETECHNOLOGYMANAGEMENT">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/PHARMACEUTICALSCIENCES/PHARMACEUTICALSCIENCES">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/PHILOSOPHY/PHILOSOPHY">
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
                    <Link style={{ color: "#c73176" }} href="/PHYSICS/PHYSICS">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/POLITICALSCIENCE/POLITICALSCIENCE">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/PSYCHOLOGY/PSYCHOLOGY">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/PUBLICADMINISTRATION/PUBLICADMINISTRATION">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/PUBLICHEALTH/PUBLICHEALTH">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/PROJECTMANAGEMENT/PROJECTMANAGEMENT">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/PURCHASINGSUPPLYCHAINMANAGEMENT/PURCHASINGSUPPLYCHAINMANAGEMENT">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/QUANTITYSURVEY/QUANTITYSURVEY">
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
                    <Link
                      style={{ color: "#c73176" }}
                      href="/SecretarialAdministration/SecretarialAdministration">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/SCIENCELABORATORYTECHNOLOGY/SCIENCELABORATORYTECHNOLOGY">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/SOCIOLOGY/SOCIOLOGY">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/STATISTICS/STATISTICS">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/THEATREARTS/THEATREARTS">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/THEOLOGYBIBLICALSTUDIES/THEOLOGYBIBLICALSTUDIES">
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
                  <Link
                    style={{ color: "#c73176" }}
                    href="/TransportManagement/TransportManagement">
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
                  <Link style={{ color: "#c73176" }} href="/accountings/">
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
                <Link
                  style={{ color: "#c73176" }}
                  href="/VETERINARYMEDICINE/VETERINARYMEDICINE">
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
