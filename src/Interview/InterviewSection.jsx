import React from "react";

const InterviewSection = () => {
  return (
    <div className="py-12 px-28">
      {/** First Row **/}
      <div className="grid grid-cols-2 gap-6 items-center">
        <img src="/images/Interview1.png" alt="Live Interview" className="w-96 h-96" />

        <div>
          <h2 className="text-blue-600 font-bold text-lg">Live Interviews</h2>
          <p className="font-semibold text-gray-800 mt-1">
            + Effortlessly Schedule and Host Live Interviews
          </p>
          <p className="text-gray-600 mt-2">
          nuJOB.AI enables recruiters to take full control of the interview process. Schedule live interviews directly on the platform, collaborate seamlessly with hiring managers and industry experts, and bring together the right people for real-time candidate evaluations. Whether it’s a one-on-one interview or a panel discussion, our platform ensures a smooth and collaborative experience, providing real-time feedback for well-informed hiring decisions.
          </p>

          <h2 className="text-blue-600 font-bold text-lg mt-6">Interviews Visor</h2>
          <p className="font-semibold text-gray-800 mt-1">
            + AI-Powered Dashboard for Monitoring and Facilitation
          </p>
          <p className="text-gray-600 mt-2">
          Our AI-driven Interviews Visor provides a comprehensive dashboard to monitor and manage all scheduled interviews in real time. Gain insights, track progress, and even facilitate interviews with the help of AI avatars, enhancing engagement and efficiency. Let AI optimize the recruitment process, ensuring seamless candidate assessments and streamlined operations.
          </p>
        </div>
      </div>

      {/** Second Row **/}
      <div className="grid grid-cols-2 gap-12 items-center mt-12">
        <div>
          <h2 className="text-blue-600 font-bold text-lg">AI Interview Simulation</h2>
          <p className="font-semibold text-gray-800 mt-1">
            + Prepare for Interviews with Tailored Simulations
          </p>
          <p className="text-gray-600 mt-2">
          nuJOB.AI offers advanced AI interview simulations, recreating real-world scenarios tailored to your target roles. Practice in a controlled, stress-free environment, improve your responses, and build confidence for the real interview. The AI analyzes not only your answers but also your demeanor and communication style, helping you refine and polish your techniques.
          </p>

          <h2 className="text-blue-600 font-bold text-lg mt-6">AI Virtual Interviewing</h2>
          <p className="font-semibold text-gray-800 mt-1">
            + Transforming the way Resumes are Built
          </p>
          <p className="text-gray-600 mt-2">
          nuJOB.AI introduces AI-powered interviews that shape resumes based on your real performance. Your responses, tone, and behavior are analyzed to create an accurate reflection of your skills and strengths. Practice at your own pace, receive instant feedback, and boost your chances of matching with the right job opportunities.
          </p>
        </div>

        <img src="/images/Interview2.png" alt="AI Interview" className="w-96 h-96" />
      </div>
    </div>
  );
};

export default InterviewSection;
