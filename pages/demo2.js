import _JSXStyle from "styled-jsx/style";

export default function Comment() {
  return (
    <div>
      <main>
        <section className='slide slide-content current'>
          <div className='slide-message'>
            <q>
              Don't let anyone treat<br></br>you like free salsa. You are guac,
              baby girl,&nbsp;guac.
            </q>
          </div>
        </section>
      </main>

      <_JSXStyle id='comment'>{`
        section {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }

        section.slide-content {
          display: flex; /* Apply flex to all sizes, adjust with media query below */
        }

        section.slide-content .slide-message {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          max-width: 350px;
          margin: 0 auto; /* Simplify margin settings */
          text-align: center;
          font-size: 24px; /* Default font size */
          padding: 24px; /* Default padding */
          position: relative; /* Apply position relative here for q:before and q:after */
        }

        section.slide-content .slide-message q:before,
        section.slide-content .slide-message q:after {
          position: absolute;
          opacity: 0.5;
          font-size: 36px; /* Default font size for quotes */
        }

        section.slide-content .slide-message q:before {
          top: 0;
          left: 0;
        }

        section.slide-content .slide-message q:after {
          right: 0;
          bottom: -16px; /* Default bottom position */
        }

        .slide-content {
          will-change: opacity, visibility;
          opacity: 0; /* Default state */
          visibility: hidden; /* Default state */
        }

        .slide-content.current {
          opacity: 1;
          visibility: visible;
        }

        .slide-content.current .slide-message {
          opacity: 1; /* Make visible when current */
        }

        @media only screen and (min-width: 670px) {
          section.slide-content .slide-message {
            width: 70%;
            max-width: none;
            padding-left: 24px;
            font-size: 36px; /* Increase font size */
            padding: 36px; /* Increase padding */
          }

          section.slide-content .slide-message q:before,
          section.slide-content .slide-message q:after {
            font-size: 64px; /* Increase font size for quotes */
          }

          section.slide-content .slide-message q:after {
            bottom: -34px; /* Adjust bottom position */
          }
        }
      `}</_JSXStyle>
    </div>
  );
}
