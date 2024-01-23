import React from 'react';
// Images
import Image1 from '../../assets/images/general/app_making.png';
import Image2 from '../../assets/images/general/solar.jpg';
import Image3 from '../../assets/images/general/park.jpg';

function HomePageAboutSection() {
  return (
    <section className='grid w-full h-full overflow-hidden'>
      <div className='px-20'>
        <div className='py-8'>
          <article className='container px-10 py-10 mx-auto'>
            <div className='grid'>
              <section>
                <div className=''>
                  <h6 className='text-2xl lg:text-3xl font-semibold text-gray-800  dark:text-white'>
                    <span className='font-bold text-3xl lg:text-4xl'>
                      A little about
                    </span>{' '}
                    <br /> us at{' '}
                    <span className='text-main-colour font-bold'>myecoapp</span>
                  </h6>
                </div>
                <div className='mt-2'>
                  <span className='inline-block w-40 h-1 bg-main-colour rounded-full'></span>
                  <span className='inline-block w-3 h-1 ml-1 bg-main-colour rounded-full'></span>
                  <span className='inline-block w-1 h-1 ml-1 bg-main-colour rounded-full'></span>
                </div>
              </section>

              <section className='mt-6'>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero voluptate odio eos porro atque, iste accusamus, saepe
                    maxime accusantium consequatur vel nulla officiis ullam
                    deleniti amet fugiat, at alias quia vero! Dolorem doloremque
                    officiis numquam nemo magni labore? Dolorum at itaque, dolor
                    reprehenderit aut repudiandae corrupti sint dicta distinctio
                    expedita. In earum odit sunt? Accusantium, quaerat eveniet
                    fugiat praesentium nobis voluptatem asperiores voluptatum
                    nihil iste vitae est, et quod quisquam deserunt ratione in
                    pariatur odio optio earum? Nobis, magni ullam laborum fugiat
                    porro praesentium saepe repudiandae explicabo laboriosam
                    quidem nostrum dignissimos delectus consequuntur
                    exercitationem, fugit adipisci dolorem ad labore non nisi
                    incidunt molestias ratione! Sapiente earum provident beatae
                    laboriosam excepturi vitae assumenda, ad similique corrupti,
                    voluptatem quaerat quas vel ullam eum! Officiis dignissimos
                    in eius accusantium amet culpa facilis eos laboriosam sit
                    ducimus reiciendis sed quasi provident optio, doloremque est
                    non perspiciatis tempora blanditiis nobis quibusdam debitis
                    voluptate? Natus dolorem facere neque voluptas nulla beatae
                    ipsa rem in exercitationem provident cum corporis quia,
                    consequatur, laboriosam qui, dicta illo facilis. Totam
                    cupiditate, ab quam error architecto debitis obcaecati
                    deleniti omnis explicabo repellendus iure. Ipsum itaque
                    excepturi quam. Nesciunt sequi sed ducimus, cumque ex nihil
                    eum qui odit! Esse in repudiandae architecto?
                  </p>
                </div>
              </section>

              <section className='mt-12'>
                <div className='grid grid-cols-3 gap-8'>
                  <div>
                    <img src={Image1} alt='' />
                  </div>
                  <div>
                    <img src={Image2} alt='' />
                  </div>
                  <div>
                    <img src={Image3} alt='' />
                  </div>
                </div>

                <div className='mt-12 flex'>
                  <span className='inline-block w-full h-1 bg-main-colour rounded-full'></span>
                  <span className='inline-block w-32 h-1 ml-1 bg-main-colour rounded-full'></span>
                  <span className='inline-block w-20 h-1 ml-1 bg-main-colour rounded-full'></span>
                  <span className='inline-block w-10 h-1 ml-1 bg-main-colour rounded-full'></span>
                  <span className='inline-block w-2 h-1 ml-1 bg-main-colour rounded-full'></span>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default HomePageAboutSection;
