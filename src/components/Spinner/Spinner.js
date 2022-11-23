import React from 'react';

const Spinner = () => {
    return (
        <div className='w-1/12  mx-auto'>
              <div className='m-40 w-full h-full mx-auto '>
            <div className="text-center w-16 h-16 border-8 border-dashed rounded-full animate-spin border-violet-400">
            </div>
        </div>
      </div>
    );
};

export default Spinner;