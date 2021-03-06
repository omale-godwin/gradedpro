import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="gradrdproject" content="" />
          <meta name="graded project final year project material " content="" />
          <meta name="gradedproject" content="" />

          <link
            rel="shortcut icon"
            href="images/favicon.ico"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />

          <link rel="stylesheet" href="css/bootstrap.min.css" />

          <link rel="stylesheet" href="css/style.css" />

          <link rel="stylesheet" href="css/responsive.css" />

          <link rel="stylesheet" href="css/custom.css" />
          <meta
            name="google-site-verification"
            content="u89Vdm-ka5ejYk4kPW7iAIcTm_nRBK_B799OUzXP_B8"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <script>
            var clicky_site_ids = clicky_site_ids || [];
            clicky_site_ids.push(101311761);
          </script>
          <script async src="//static.getclicky.com/js"></script>
          <script
            data-ad-client="ca-pub-3951180030872988"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

          <script src="js/jquery-3.2.1.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/jquery.superslides.min.js"></script>
          <script src="js/bootstrap-select.js"></script>
          <script src="js/inewsticker.js"></script>
          <script src="js/bootsnav.js."></script>
          <script src="js/images-loded.min.js"></script>
          <script src="js/isotope.min.js"></script>
          <script src="js/owl.carousel.min.js"></script>
          <script src="js/baguetteBox.min.js"></script>
          <script src="js/form-validator.min.js"></script>
          <script src="js/contact-form-script.js"></script>
          <script src="js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
