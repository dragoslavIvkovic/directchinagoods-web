import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  
  // Split the welcome text to style the last word differently
  const welcomeText = t('welcome').split(' ');
  const lastWord = welcomeText.pop();
  const otherWords = welcomeText.join(' ');

  return (
    <section className="container flex items-center justify-center min-h-screen -mt-40">
      <div className="text-center space-y-6 max-w-4xl">
      <main className="text-5xl md:text-6xl font-bold">
        <h1>
        <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
          {otherWords}{' '}
        </span>
        <span className="inline bg-gradient-to-r from-[#47BFD2] to-[#4775D2] text-transparent bg-clip-text">
          {lastWord}
        </span>
        </h1>
      </main>
      </div>
    </section>
  );
};

export default Hero;