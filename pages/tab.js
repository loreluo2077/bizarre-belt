export default function Tab() {
  return (
    <div>
      <div className='flex justify-center items-center bg-gray-200 h-16'>
        <div className='flex space-x-4'>
          <div className='bg-white rounded-full p-3 shadow-md'>
            <i className='fas fa-sync-alt text-gray-500'></i>
          </div>
          <div className='bg-white rounded-full p-3 shadow-md'>
            <i className='fas fa-times text-gray-500'></i>
          </div>
          <div className='bg-white rounded-full p-3 shadow-md'>
            <i className='fas fa-heart text-gray-500'></i>
          </div>
        </div>
      </div>
    </div>
  );
}
