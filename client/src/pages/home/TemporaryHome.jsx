import React from 'react';

function TemporaryHome() {
  return (
    <div className='bg-main-colour grid h-screen items-center justify-center'>
      <main className='w-full'>
        <div
          class='gcse-searchbox-only'
          data-resultsUrl='https://googlecustomsearch.appspot.com/elementv2/two-page_results_elements_v2.html?query=test'
        ></div>
      </main>
    </div>
  );
}

export default TemporaryHome;
