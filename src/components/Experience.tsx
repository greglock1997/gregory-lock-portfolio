import { type JSX } from 'react';
import SectionHeader from './SectionHeader';

function Experience(): JSX.Element {
  return (
    <div className="w-full flex flex-col items-center gap-y-16 py-32 container bg-[#90EE90] px-12">
      <SectionHeader 
        title="Experience"
        description="Frontend developer with professional experience working across websites, desktop and mobile applications, combining clean UI implementation with close collaboration between designers, clients, and backend developers."
      />
      <div className="flex flex-col md:grid grid-cols-3 gap-8 items-start">
        <div className="flex flex-col gap-y-2 md:gap-y-4 bg-white p-4 md:p-8 border-4 border-black rounded-2xl">
          <div className="flex flex-col gap-y-2">
          <h1 className="text-black font-bold font-title text-3xl md:text-3xl">Frontend Developer</h1>
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg md:text-xl">ZOG Solutions Ltd.</h2>
              <h3 className="text-sm md:text-base font-medium">July 2023 - June 2024</h3>
            </div>
          </div>
          <ul className="flex flex-col gap-y-3 text-sm md:text-base leading-relaxed [&>li]:list-disc [&>li]:ml-4">
            <li>Led development of an employee training platform prototype frontend and backend using React and ExpressJS implementing secure authentication and progress-tracking features including quizzes and scoring</li>
            <li>Worked with backend team to design, develop and test the frontend of an energy industry operations portal with React JS, integrating AWS Cognito and DynamoDB for authentication and data management</li>
            <li>Collaborated on Python-based AWS Lambda functions for data normalization, writing unit tests and integrating with S3, SQS, and Athena to automate customer data processing</li>
            <li>Maintained and extended legacy PHP applications across both frontend and backend components</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2 md:gap-y-4 bg-white p-4 md:p-8 border-4 border-black rounded-2xl">
          <div className="flex flex-col gap-y-2">
          <h1 className="text-black font-bold font-title text-3xl md:text-3xl">Software Developer</h1>
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg md:text-xl">Option Systems Ltd.</h2>
              <h3 className="text-sm md:text-base font-medium">June 2024 - October 2024</h3>
            </div>
          </div>
          <ul className="flex flex-col gap-y-3 text-sm md:text-base leading-relaxed [&>li]:list-disc [&>li]:ml-4">
            <li>Served as lead developer on an Electron-based PDF maker, maintaining and modernising a large legacy JavaScript/Node.js codebase</li>
            <li>Introduced unit testing with Jest for key functions, increasing maintainability for future developers</li>
            <li>Delivered new features including a file version control system, layout design tools, multilingual translation sets, and advanced formatting options</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2 md:gap-y-4 bg-white p-4 md:p-8 border-4 border-black rounded-2xl">
          <div className="flex flex-col gap-y-2">
          <h1 className="text-black font-bold font-title text-3xl md:text-3xl">Frontend Developer</h1>
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg md:text-xl">The Unloved Ltd.</h2>
              <h3 className="text-sm md:text-base font-medium">October 2024 - October 2025</h3>
            </div>
          </div>
          <ul className="flex flex-col gap-y-3 text-sm md:text-base leading-relaxed [&>li]:list-disc [&>li]:ml-4">
            <li>Developed and maintained the frontend of the Artstamp mobile app (iOS/Android) from start to finish using React Native Expo</li>
            <li>Built responsive websites for commercial clients with Vue.js, React JS, Typescript, Tailwind CSS, and PHP, delivering user-friendly interfaces with an emphasis on visuals and accessibility</li>
            <li>Managed and enhanced WordPress sites by creating custom templates, integrating new functionality, and optimizing content with PHP</li>
            <li>Collaborated closely with designers, clients and backend developers to deliver features from concept to production</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;