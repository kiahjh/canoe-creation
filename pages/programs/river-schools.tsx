import React from 'react';
import Chrome from '../../components/Chrome';
import BgPicture from '../../public/island.jpg';

const RiverSchools: React.FC = () => {
  return (
    <Chrome page="/river-schools">
      <div className="flex flex-col flex-grow">
        <header className="p-12 border-y">
          <h1>River Schools</h1>
        </header>
        <main className="flex flex-grow">
          <div className="p-12 flex-grow">
            <div className="bg-slate-50 rounded-3xl p-8 prose">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, cupiditate
                veritatis quos tempora quaerat adipisci repudiandae, earum hic optio quas
                asperiores possimus voluptatibus sequi id nisi corrupti officiis. Iure,
                perspiciatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, cupiditate
                veritatis quos tempora quaerat adipisci repudiandae, earum hic optio quas
                asperiores possimus voluptatibus sequi id nisi corrupti officiis. Iure,
                perspiciatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, cupiditate
                veritatis quos tempora quaerat adipisci repudiandae, earum hic optio quas
                asperiores possimus voluptatibus sequi id nisi corrupti officiis. Iure,
                perspiciatis.
              </p>
            </div>
          </div>
          <div className="w-128 border-l p-12">
            <div className="bg-white border-[0.5px] border-slate-200 shadow-md rounded-3xl p-8">
              <h3 className="text-xl font-bold text-slate-700">Information</h3>
            </div>
          </div>
        </main>
      </div>
    </Chrome>
  );
};

export default RiverSchools;
