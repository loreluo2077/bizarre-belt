import _JSXStyle from "styled-jsx/style";

export default function Button() {
  return (
    <div>
      <button class='button'>New Message</button>

      <_JSXStyle id='button'>{`


.button {
        cursor: pointer;
        appearance: none;
        border-radius: 500px;
        border-style: solid;
        border-color: $color;
        background-color: $bg;
        color: $color;ç
        font-family: $font;
        font-size: 20px;
        line-height: 1;
        letter-spacing: 1pt;
        padding: 12px 18px 10px;
.button:hover, .button:focus {
            background: $color;
            color: $bg;
        }
.button:active {
            border-color: desaturate(darken($bg, 15%), 25%);
            background-color: desaturate(darken($bg, 15%), 25%);
            color: $color;
        }
    }
}
    
    `}</_JSXStyle>
    </div>
  );
}
