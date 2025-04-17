import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Javier",
    role: "Junior Network Engineer",
    quote:
      "💬 “It Felt Real”: What Users Are Saying About Taking Exams on nuJOB.ai As AI continues to reshape the future of work, nuJOB.ai is pioneering how candidates prepare, validate, and land job opportunities. But what really matters isn’t just the tech—it’s the experience people have while using it. So, what’s it actually like to take an exam on nuJOB.ai? We asked users to share their honest opinions. Here’s what they said.",
  },
  {
    name: "Valeria",
    role: "Cloud Support Specialist",
    quote:
      "✅ “It’s not just a test, it’s a full simulation” “I thought I was just going to click through a few multiple-choice questions. I didn’t expect a full-blown simulation that actually tested what I know. The avatar interview made it feel like a real interview. It was intense—in a good way.”",
  },
  {
    name: "Carlos",
    role: "Full-Stack Developer",
    quote:
      "🧠 “You know exactly what you’re good at—and what you’re not” “What I liked most was the immediate feedback. It’s not just ‘pass’ or ‘fail.’ You get insight on your strengths and areas to improve. That’s what makes it different from certifications I’ve done before.”",
  },
  {
    name: "Natalia",
    role: "Recent Graduate",
    quote:
      "🤝 “It made me feel more confident going into a real interview” “I got to practice, fail, learn, and then try again. I wish I had this before my first job. It’s like a real interview coach that’s not judging you.”",
  },
  {
    name: "Miguel",
    role: "Cybersecurity Analyst",
    quote:
      "🌐 “I recommend it to anyone who wants to prove they’re job-ready” “Whether you're fresh out of school or already in the field, this is how you stand out. It’s better than listing a bunch of courses on LinkedIn. You prove you can do the job.”",
  },
  {
    name: "Natalia",
    role: "Recent Graduate",
    quote:
      "🎯 “It’s challenging… but fair” “I was nervous at first. But I realized the platform is designed to help me succeed—not trap me. You’re challenged, but it’s fair. And it reflects the type of work I actually want to be hired for.”",
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 px-4 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-2">Real Stories, Real Success</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        See how job-seekers like you achieved career success with the support of
        nuJOB.AI. Our tailored AI-driven solutions have helped countless
        professionals land their dream jobs.
      </p>
      <div className=" hidden lg:flex absolute left-24 z-30">
        <img src="/images/Quotes.png" alt="" />
      </div>
      <div className="hidden lg:flex absolute right-24 top-[2250px]  z-30">
        <img src="/images/Quotes1.png" alt="" />
      </div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="max-w-xl md:max-w-5xl mx-auto"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative flex items-center justify-center">
              {/* Quote top-left (outside box) */}
              
              <div
                className={`relative p-6 rounded-xl  h-64 shadow-md bg-white transition-transform duration-300 ease-in-out ${
                  isActive ? "scale-95 shadow-lg" : "scale-75 opacity-80"
                }`}
                style={{ overflow: 'visible' }}
              >
                 <p className="text-gray-700 text-xs mb-4">“{t.quote}”</p>
              <div className="flex items-center gap-3">
                <div className="bg-gray-300 h-10 w-10 rounded-full" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
