export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-80'>
        <div className='flex items-center mb-4'>
          <img
            className='rounded-full h-12 w-12'
            src='https://placehold.co/100x100'
            alt='Profile picture placeholder'
          />
          <div className='ml-3'>
            <div className='text-sm font-medium'>稀罕</div>
          </div>
        </div>
        <div className='text-lg font-medium mb-4'>
          已只是看着他去寻找属于自己的选择和决定，忽略了你的回望
        </div>
        <div className='flex justify-between items-center border-t border-gray-200 pt-3'>
          <div className='text-gray-500'>
            <span className='font-medium text-black'>8</span> 赞同，
            <span className='font-medium text-black'>13</span> 条评论
          </div>
          <div>1 年前</div>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <button className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-200'>
            <i className='fas fa-redo'></i>
          </button>
          <button className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-200'>
            <i className='fas fa-times'></i>
          </button>
          <button className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-200'>
            <i className='fas fa-heart'></i>
          </button>
        </div>
        <div className='flex justify-between items-center mt-4 text-gray-500'>
          <div>首页</div>
          <div>探索</div>
          <div>通知</div>
          <div>我</div>
        </div>
      </div>
    </div>
  );
}
