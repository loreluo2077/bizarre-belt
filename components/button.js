export default function Button({ text }) {
  return (
    <div className='flex justify-center my-3'>
      <section className='flex justify-center items-end'>
        <button
          className='cursor-pointer appearance-none rounded-full 
           border-2 border-[#F8E8DB] bg-[#FE625B] text-[#f8e8db] text-lg leading-none tracking-tighter py-3 px-7 
          hover:bg-[#F8E8DB] hover:text-[#FE625B] active:bg-[#d55751]'
        >
          {text}
        </button>
      </section>
    </div>
  );
}
