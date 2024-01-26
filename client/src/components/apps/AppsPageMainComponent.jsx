import React, { useState } from 'react';
// Data
import { availableAppsAndServices } from '../../data/AvailableAppsArray';
import AppDisplayItem from './AppDisplayItem';

function AppsPageMainComponent() {
  const [appsAndWeb, setAppsAndWeb] = useState(availableAppsAndServices);

  return (
    <section className='grid'>
      <section className='grid mb-10'>
        <div>
          <h1>
            <span>Available Apps and web</span>
          </h1>
        </div>
        <div>
          <p>
            By creating free to you services with apps and websites, that you
            can use daily and earn us money each time you do. By advertising no
            more than anyone else.
          </p>
        </div>

        <div className='grid grid-cols-2 w-full bg-red-400'>
          {appsAndWeb.map((app, index) => {
            return <AppDisplayItem key={index} app={app} />;
          })}
        </div>
      </section>
    </section>
  );
}

export default AppsPageMainComponent;
