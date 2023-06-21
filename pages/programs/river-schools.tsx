import React from 'react';
import Chrome from '../../components/Chrome';
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import IslandImage from '../../public/island.jpg';
import RappellingImage from '../../public/rappelling.jpg';
import CampsiteImage from '../../public/campsite.jpg';
import Button from '../../components/Button';

const RiverSchools: React.FC = () => {
  return (
    <Chrome page="/river-schools">
      <main className="flex">
        <div className="flex-grow p-16">
          <h1 className="text-5xl font-raleway w-fit text-slate-950">River Schools</h1>
          <div className="mt-4 mb-6 flex gap-2">
            <div className="border border-slate-400 rounded-full bg-white flex justify-center items-center space-x-2 px-2 py-1">
              <CalendarDaysIcon className="h-5 text-slate-500" />
              <span className="text-slate-500 text-sm">1-3 days</span>
            </div>
            <div className="border border-slate-400 rounded-full bg-white flex justify-center items-center space-x-2 px-2 py-1">
              <UsersIcon className="h-5 text-slate-500" />
              <span className="text-slate-500 text-sm">Ages 12+</span>
            </div>
            <div className="border border-slate-400 rounded-full bg-white flex justify-center items-center space-x-2 px-2 py-1">
              <CurrencyDollarIcon className="h-5 text-slate-500" />
              <span className="text-slate-500 text-sm">$65 / person</span>
            </div>
          </div>
          <p className="text-slate-600 text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus porro
            repellendus, maiores amet illum laborum error vel eius rem libero. Facilis
            natus praesentium deserunt doloribus eaque, quidem beatae suscipit id? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eveniet unde accusantium
            facilis harum totam provident repellat fugit sunt tempora explicabo eius
            velit, amet consectetur nobis animi, vero deserunt? Commodi, soluta. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Ratione doloremque alias
            blanditiis voluptatibus, beatae perferendis tempora libero ducimus, neque
            sapiente, eligendi saepe doloribus quas enim ab vel perspiciatis molestias
            minus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et assumenda
            esse vel.
          </p>
          <div className="mb-8 mt-12 bg-white rounded-3xl relative">
            <div className="w-14 h-14 bg-emerald-400 rounded-full absolute -left-5 -top-5 flex justify-center items-center">
              <UsersIcon className="h-7 text-white" />
            </div>
            <div className="p-8 pb-6 border border-b-0 border-slate-200 rounded-t-3xl bg-emerald-50/10">
              <p className="text-xl text-slate-500 font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, numquam
                maxime consequuntur possimus a alias nulla quaerat fugiat voluptatum
                neque, repellat dolore. Fugit obcaecati quisquam quas nam? Nesciunt, minus
                commodi.
              </p>
            </div>
            <div className="px-8 py-4 flex justify-end bg-emerald-100 rounded-b-3xl">
              <span className="text-lg font-semibold text-emerald-600 italic">
                - Homeschool mom
              </span>
            </div>
          </div>
          <p className="text-slate-600 text-lg leading-8">
            Impedit aliquam in assumenda autem ab itaque ipsa nostrum tenetur ut est.
            Facilis temporibus soluta eos ipsam rerum. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ipsum similique aspernatur ratione libero
            minima rerum nihil ducimus amet tenetur doloremque quaerat soluta magnam
            cumque quos commodi consequatur fuga, adipisci quam? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Ducimus a dolorem ab odit ut inventore
            illum cumque nobis, eveniet, reprehenderit quibusdam fuga at. Adipisci nam
            deleniti praesentium vel porro quos!
          </p>
        </div>
        <div className="w-176 bg-slate-100 m-8 rounded-3xl shrink-0">
          <div className="p-8">
            <div
              className="h-72 bg-center bg-cover rounded-3xl hover:scale-[102%] hover:shadow-lg transition duration-200 cursor-pointer"
              style={{ backgroundImage: `url(${IslandImage.src})` }}
            />
            <div className="flex gap-8 mt-8">
              <div
                className="h-64 w-1/2 bg-center bg-cover rounded-3xl hover:scale-[102%] hover:shadow-lg transition duration-200 cursor-pointer"
                style={{ backgroundImage: `url(${CampsiteImage.src})` }}
              />
              <div
                className="h-64 w-1/2 bg-center bg-cover rounded-3xl hover:scale-[102%] hover:shadow-lg transition duration-200 cursor-pointer"
                style={{ backgroundImage: `url(${RappellingImage.src})` }}
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button
                type="button"
                onClick={() => {}}
                color="secondary"
                size="sm"
                icon="grid"
                className="!bg-emerald-200/60 hover:!bg-emerald-200"
              >
                See more
              </Button>
            </div>
          </div>
          <div className="p-8">
            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Want to register or just have a question?
              </h3>
              <p className="mt-3 text-slate-500 max-w-md">
                Feel free to reach out! We will do our best to get back to you within 3
                business days.
              </p>
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-slate-500 font-medium">
                    Name
                  </label>
                  <input
                    className="px-6 py-4 w-full rounded-2xl border border-slate-200 focus:border-emerald-400 outline outline-transparent focus:outline-emerald-400 transition duration-200 placeholder-slate-400"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-slate-500 font-medium">
                    Email address
                  </label>
                  <input
                    className="px-6 py-4 w-full rounded-2xl border border-slate-200 focus:border-emerald-400 outline outline-transparent focus:outline-emerald-400 transition duration-200 placeholder-slate-400"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="me@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-slate-500 font-medium">
                    Message
                  </label>
                  <textarea
                    className="px-6 py-4 w-full rounded-2xl border border-slate-200 focus:border-emerald-400 outline outline-transparent focus:outline-emerald-400 transition duration-200 placeholder-slate-400"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Any questions or comments are welcome!"
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={() => {}}
                    color="primary"
                    size="md"
                    icon="arrow-circle-right"
                  >
                    Send message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Chrome>
  );
};

export default RiverSchools;
