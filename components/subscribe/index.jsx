const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="w-screen">
        <div className="bg-[url(/images/subscribe.jpg)] h-60 flex justify-evenly">
          <h4 className="text-white text-3xl font-semibold w-1/3 text-center mt-10">
            Subscribe to our newsletter and receive exclusive offers every week
          </h4>

          <form className="font-semibold w-1/3 text-center mt-10 rounded-2xl">
            <input
              type="email"
              placeholder="Email address"
              className="font-extralight text-center rounded-2xl w-44 h-11"
            />
            <button
              type="submit"
              className="ml-10 bg-yellow-600 rounded-2xl w-32 h-11"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
