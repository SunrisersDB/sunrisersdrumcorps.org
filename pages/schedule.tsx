import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function Schedule() {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <div className="">
        <Navbar />
      </div>
      <div className="flex-1 h-full p-4 flex">
        <iframe
          className="mx-auto w-full max-w-5xl md:p-6"
          src="https://calendar.google.com/calendar/embed?src=cc2844kp81lfo1oti18hh92h9s%40group.calendar.google.com&ctz=America%2FNew_York"
          title="Sunrisers DB Schedule"
          id="test"
          width="800"
          height="600"
          scrolling="no"
        ></iframe>
      </div>
      <div className="min-h-full">
        <Footer />
      </div>
    </div>
  );
}
