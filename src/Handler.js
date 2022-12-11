const Missing = ({error}) => {
    return (
      <div className='mt-[250px] text-2xl text-gray-600 font-semibold flex flex-col items-center'>
        <p>{error}</p>
        <small>Please ensure that the file is properly formatted, small and doesn't contain nested objects</small>
      </div>
    )
  }
  
  export default Missing;