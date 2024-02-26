import _JSXStyle from "styled-jsx/style";

const SvgComponent = () => (
  <svg width={244} height={463} className='phone'>
    <g
      fill='none'
      fillRule='evenodd'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='phone-sparkle'
    >
      <rect
        width={240}
        height={457.5}
        x={2.08}
        y={1.341}
        stroke='#000'
        strokeWidth={3}
        className='phone-stroke'
        rx={27}
      />
      <rect
        width={217.5}
        height={427.75}
        x={13.33}
        y={16.216}
        fill='#F8E8DB'
        className='phone-screen'
        rx={16}
      />
      <path
        stroke='#FF1313'
        strokeWidth={3}
        d='M152.212 214.632c11.025 7.546 44.657 11.982 44.657 11.982s-38.955 11.304-46.52 20.413c-9.032 10.878-9.208 53.305-9.208 53.305s-1.347-42.385-10.176-53.305c-7.751-9.585-45.551-20.824-45.551-20.824s37.575-4.134 45.551-12.128c10.575-10.597 8.56-54.274 8.56-54.274s.13 8.979 1.247 19.716c.918 8.809 2.498 18.802 5.215 25.992m-77.886-5.993c-5.177-3.543-20.97-5.626-20.97-5.626s18.292-5.308 21.844-9.585c4.241-5.108 4.324-25.03 4.324-25.03s.633 19.902 4.779 25.03c3.639 4.501 21.388 9.778 21.388 9.778s-17.643 1.94-21.388 5.695c-4.966 4.976-4.02 25.485-4.02 25.485s-.062-4.216-.586-9.258c-.43-4.136-1.173-8.828-2.448-12.205m16.46 78.748c-5.177-2.914-20.97-4.627-20.97-4.627s18.293-4.365 21.845-7.884c4.24-4.2 4.323-20.586 4.323-20.586s.633 16.368 4.78 20.586c3.639 3.702 21.388 8.042 21.388 8.042s-17.644 1.597-21.389 4.684c-4.966 4.093-4.02 20.962-4.02 20.962s-.06-3.469-.585-7.615c-.43-3.403-1.173-7.261-2.448-10.038'
        className='avatar'
      />
    </g>
  </svg>
);

export default function Phone() {
  return (
    <div>
      <div className='slide-graphic'>
        <SvgComponent></SvgComponent>
      </div>
      <_JSXStyle id='phone'>{`

.slide-graphic{
  // background-color: #FE625B;
}


    `}</_JSXStyle>
    </div>
  );
}
