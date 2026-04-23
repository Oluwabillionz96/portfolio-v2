import StickyContainer from "./ui/sticky-container";

const AboutSection = () => {
  return (
    <section
      className="lg:min-h-screen flex flex-col lg:flex-row items-start lg:gap-20 lg:py-32 px-6 lg:px-8 gap-4"
      id="about"
    >
      <StickyContainer>
        <h2 className="uppercase text-xl sm:text-4xl lg:text-6xl font-bold font-space md:flex">
          The Philosophy
        </h2>
      </StickyContainer>

      <section>
        <div className="text-lg md:text-xl  font-sans leading-8 space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            fugit dolore, optio consectetur sed harum, quo iste voluptatum
            dolorum aspernatur quia non vero minus dicta nulla hic eum ad?
            Magnam nobis, quis ea nesciunt commodi odit numquam at dolor
            quibusdam. Ea, fuga non
          </p>
          <p>
            exercitationem at aliquid tempore, reiciendis pariatur, accusantium
            voluptatem esse explicabo nam eveniet velit rem nisi ipsa! Pariatur
            velit sed excepturi fugiat minima neque aperiam vel inventore
            voluptatem omnis maxime vero asperiores, incidunt itaque tenetur
          </p>
          <p>
            eligendi id eaque quaerat sint aspernatur, eos nam minus et. Quod
            qui quis facere est reprehenderit harum provident dolore, illum
            possimus porro expedita sunt natus laborum, dolorem nesciunt sint
            voluptatem voluptatum ad tempora asperiores. Natus velit animi
            ipsum, commodi
          </p>
          <p>
            error aspernatur necessitatibus? Facilis fuga asperiores adipisci
            omnis quod veritatis eius? Dolor, accusamus. Perspiciatis eaque
            voluptate, quam delectus labore maiores reiciendis hic quo,
            repudiandae fugit, voluptas alias reprehenderit enim consectetur
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
