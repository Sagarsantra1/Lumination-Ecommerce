import ProcessCard from "../Components/ProcessCard";
import TeamCard from "../Components/TeamCard";

function About() {
  return (
    <div className="flex flex-col justify-center items-center p-2 md:p-5 overflow-hidden">
      <span className="text-xl font-bold">
        we are <span className="logo text-3xl">Lumination</span>
      </span>
      <p className=" px-5 md:px-20 text-center mb-5 text-sm">
        The home of beautifully handcrafted, eco-friendly candles that won't
        break the bank. Our passion for creating the perfect ambiance with our
        candles is what drives us, and we're dedicated to sharing that passion
        with you.
      </p>
      <span className="text-xl font-bold">Our Values</span>
      <div className="flex items-center justify-center mb-5">
        <div className="border-r border-black h-full pr-2 md:pr-10">
          <div className="h-48 pt-16 text-right">
            <span className="text-sm font-bold">Quality Matters</span>
            <p className="text-right text-xs w-60 md:w-72">
              We take pride in crafting high-quality candles that are beautiful,
              long-lasting, and eco-friendly. Our attention to detail and
              commitment to excellence ensure that you'll always receive a
              superior product.
            </p>
          </div>
          <div className="h-48 pt-16 text-right">
            <span className="text-sm font-bold">Honest & Transparent</span>
            <p className="text-right text-xs w-60 md:w-72">
              We believe in transparency and honesty in all of our interactions.
              We're dedicated to building trust with our customers and
              delivering on our promises.
            </p>
          </div>
          <div className="h-48 pt-16 text-right">
            <span className="text-sm font-bold">Community Matters</span>
            <p className="text-right text-xs w-60 md:w-72">
              We believe in giving back to our community and supporting causes
              that matter. We're proud to partner with local organizations and
              contribute to the well-being of those around us.
            </p>
          </div>
        </div>
        <div className="border-l-2 border-black h-full pl-2 md:pl-10">
          <div className="h-48 pb-16 text-left">
            <span className="text-sm font-bold">People First</span>
            <p className="text-left text-xs w-60 md:w-72">
              We care about our customers, our team members, and our community.
              We strive to create meaningful relationships and provide a
              welcoming, inclusive atmosphere for all.
            </p>
          </div>
          <div className="h-48 pb-16 text-left">
            <span className="text-sm font-bold">Creativity Abounds</span>
            <p className="text-left text-xs w-60 md:w-72">
              We encourage creativity and self-expression in all that we do.
              From our unique candle designs to our customizable options, we're
              excited to help you bring your vision to life.
            </p>
          </div>
          <div className="h-48 pb-16 text-left">
            <span className="text-sm font-bold">Sustainability is Key</span>
            <p className="text-left text-xs w-60 md:w-72">
              We're committed to sustainability and reducing our environmental
              impact. From our eco-friendly materials to our responsible
              manufacturing practices, we're always looking for ways to do
              better.
            </p>
          </div>
        </div>
      </div>
      <span className="text-xl font-bold">Our Process</span>
      <p className="px-5 md:px-20 text-center text-sm mb-5">
        At Lumination, We believe in transparency, so we want you to know
        exactly what goes into each and every one of our candles. Our each
        candal is -
      </p>
      <div className="flex justify-center overflow-scroll w-full hideScrol">
        <div className="flex justify-center w-fit">
          <ProcessCard
            imge="\High-Quality.svg"
            alte="High-Quality "
            process="High-Quality"
            point1="Natural soy wax, lead-free wicks"
            point2="Phthalate-free fragrances, essential oils"
            point3="Recyclable container materials"
            point4="Trusted, values-aligned suppliers"
          />
          <ProcessCard
            imge="\Handcrafted.svg"
            alte="Handcrafted "
            process="Handcrafted "
            point1="Hand-poured with attention"
            point2="Precise measuring process"
            point3="Slow, even cooling"
            point4="Quality testing"
          />
          <ProcessCard
            imge="\Customizable.svg"
            alte="Customizable "
            process="Customizable "
            point1="Variety of scents, sizes"
            point2="Personalized candles"
            point3="Custom orders available"
            point4="Variety of container options"
          />
          <ProcessCard
            imge="\Eco Friendly.svg"
            alte="Eco Friendly "
            process="Eco Friendly "
            point1="Sustainable materials and packaging"
            point2="Reusable/recyclable containers"
            point3="Minimal packaging, recycling"
            point4="Partner with eco-conscious orgs."
          />
        </div>
      </div>
      <span className="text-xl font-bold">Meet the Team</span>
      <p className="px-5 md:px-20 text-center mb-5 text-sm">
        Meet the people behind Lumination! Our team is made up of passionate
        candle makers who are dedicated to creating the perfect scent for every
        occasion. we're a team of individuals who share a love for creating the
        perfect candle.
      </p>
      <div className="flex justify-center overflow-scroll w-full hideScrol">
        <div className="flex justify-center w-fit">
          <TeamCard
            imge="\team1.png"
            alte="team1"
            name="Sarah Johnson"
            designation="Head Candle Maker"
            qulification="Bachelor's Degree in Fine Arts"
          />
          <TeamCard
            imge="\team2.png"
            alte="team2"
            name="David Lee"
            designation="Shipping Manager"
            qulification="High School Diploma"
          />
          <TeamCard
            imge="\team3.png"
            alte="team3"
            name="Emily Davis"
            designation="Marketing Specialist"
            qulification="Bachelor's Degree in Marketing"
          />
          <TeamCard
            imge="\team4.png"
            alte="team4"
            name="Michael Nguyen"
            designation="Operations Manager"
            qulification="Master's Degree in Business Administration"
          />
        </div>
      </div>
      <span className="text-xl font-bold">Contact Us</span>
      <p className="px-5 md:px-20 text-center mb-5 text-sm">
        Have a question or want to place a custom order? We're always here to
        help!
      </p>

      <div className="flex flex-col text-center">
        <span>You can reach us by</span>
        <span>
          email at <b>info@luminationcandles.com</b> or by phone at{" "}
          <b>(555) 555-5555</b> .
        </span>
        <span>We'd love to hear from you!</span>
      </div>
    </div>
  );
}

export default About;
