function HeroSection() {
  return (
    <div className="w-full md:mb-20 h-80 md:h-screen pt-60 md:pt-96 relative bottom-14 flex px-5 py-24 items-center justify-center flex-col hero_color">
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font md:mt-16 sm:text-4xl text-3xl font-medium text-gray-900 logo">
          Lumination
        </h1>
        <p className="leading-relaxed">
          Experience the Cozy and Inviting Atmosphere of Handmade Candles:
          Discover Our Unique Scents and Styles for Your Home
        </p>
      </div>
      <img
        className=" w-full mb-10 relative bottom-24 object-cover object-center rounded mix-blend-multiply"
        alt="hero"
        src="src\assets\upscaler-Sagarinimalist_website_ho-2x-2x.jpg"
      />
    </div>
  );
}

export default HeroSection;
