// import _JSXStyle from "styled-jsx/style";

export default function Comment({ msg, author, fontSize }) {
  // 计算引号大小和位置，基于 fontSize
  const quoteSize = fontSize * 1.5;
  const quoteBottom = fontSize * -0.5;

  const largeFontSize = fontSize * 1.25;
  const largeQuoteSize = largeFontSize * 1.5;
  const largeQuoteBottom = largeFontSize * -0.5;

  return (
    <div>
      <main>
        <section className='w-auto flex'>
          <div className='slide-message flex max-w-sm m-auto p-10 relative'>
            <q className=''>
              {msg} <span className='opacity-45 text-sm'>{author}</span>
            </q>
          </div>
        </section>
      </main>

      <style jsx>{`
        .slide-message q,
        .slide-message span {
          font-size: ${fontSize}px;
        }

        .slide-message q:before,
        .slide-message q:after {
          position: absolute;
          opacity: 0.5;
          font-size: ${quoteSize}px;
          font-family: fangsong;
        }

        .slide-message q:before {
          top: 0;
          left: 0;
        }

        .slide-message q:after {
          right: 0;
          bottom: ${quoteBottom}px;
        }

        @media only screen and (min-width: 670px) {
          .slide-message q,
          .slide-message span {
            font-size: ${largeFontSize}px;
          }

          .slide-message q:before,
          .slide-message q:after {
            position: absolute;
            opacity: 0.5;
            font-size: ${largeQuoteSize}px;
            font-family: fangsong;
          }

          .slide-message q:before {
            top: 0;
            left: 0;
          }

          .slide-message q:after {
            right: 0;
            bottom: ${largeQuoteBottom}px;
          }
        }
      `}</style>
    </div>
  );
}
