import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { SectionHeadline } from '~/components/elements/';

const mockData = [
  {
    name: '2022/2023',
    link: '/timeline?year=2022',
    text: `We're a group of tech enthusiasts who are passionate
            about exploring the endless possibilities of technology and its potential to shape the future.
            Our team of students and developers is dedicated to learning, creating and understanding
            technology and developing solutions for various situations.
            `,
  },
  {
    name: '2023/2024',
    link: '/timeline?year=2023',
    text: `We focus on teaching robotics, IoT and software development to the students of the HTL Dornbirn.
By combining multiple different types of lessons students can learn to apply programming skills to
various fields, such as robotics, AI, game development, and web design. They can
also develop problem-solving skills, critical thinking, and creativity, which are essential for
success in any industry.
So, if you're interested in being a part of our journey, join us as we work towards making an impact
on our student body through our work. Feel free to explore our repositories
and connect with us if you'd like to collaborate or have any questions.

            `,
  },
];

export const Timeline = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative h-[140vh] w-full snap-always">
      <SectionHeadline pageTitel={t('page_timeline')} pageContent="Our journey - in one go" />
      <div className="pl-10 lg:pl-20">
        {mockData.map(({ name, link, text }) => (
          <div key={name} className="group/item pb-12">
            <div className="relative flex flex-row">
              <div className="mr-4 flex w-2 items-center justify-center md:w-3 lg:w-4">
                <div className="h-full w-1 rounded-full bg-white transition-all duration-500 group-hover/item:bg-primary lg:w-2" />
              </div>
              <Link className="h-auto w-5/6 text-white no-underline" to={link}>
                <h3 className="overflow-hidden hyphens-auto whitespace-pre-wrap font-bebasNeue text-6xl md:text-8xl lg:text-9xl">
                  {name}
                </h3>
                <p className="w-5/6 text-justify text-2xl">{text}</p>
              </Link>
            </div>
            <div className="my-4 aspect-square w-2 rounded-full bg-white md:w-3 lg:w-4" />
          </div>
        ))}
        <button className="flex w-80 flex-row items-center justify-evenly rounded-md bg-primary p-4 font-kumbhSans text-2xl font-semibold text-white shadow-sm shadow-primary">
          <img src="/assets/book.svg" className="aspect-square w-8" />
          <span>Continue Reading</span>
        </button>
      </div>
    </section>
  );
};
