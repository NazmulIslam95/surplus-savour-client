const Gallery = () => {
  return (
    <section className="text-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full text-center mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font">
            Master Cleanse Relic Heirloom
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franz you probably have
            not heard of them man bun deep jibing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP6tcUR3Jgtdz08FHXsCXoaGvzLd5PZYTzxQ&usqp=CAU"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://i.ytimg.com/vi/maGXGazvoIo/hqdefault.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://www.advancingnutrition.org/sites/default/files/styles/576_x1/public/2023-06/Nutrition_Campaign_Kyrgyz_Republic.jpg?itok=fKd-cyx-"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://www.vmcdn.ca/f/files/orilliamatters/2023-11-13-smilecookie.jpeg;w=960"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://foodforthoughtfulaction.files.wordpress.com/2022/10/world-food-day-2022-1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://philadelphiaattorneylawyer.com/wp-content/uploads/2020/11/Food-Share-Program.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
