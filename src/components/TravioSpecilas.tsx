import cardImg1 from "../../public/images/travio-specilas-cards/card-img-1.jpg";
import cardImg2 from "../../public/images/travio-specilas-cards/card-img-2.jpg";
import cardImg3 from "../../public/images/travio-specilas-cards/card-img-3.jpg";
import cardImg4 from "../../public/images/travio-specilas-cards/card-img-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const TravioSpecilas = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="section-title text-center">
        <span className="sub-title text-lg font-semibold text-gray-500 mb-2">
          TRAVIO SPECIALS
        </span>
        <h2 className="section-title text-5xl font-bold">
          Why Travel with Tutive?
        </h2>
      </div>

      <div className="travio-specilas-cards mt-12">
        <div className="grid grid-cols-4 gap-4">
          {/* Single Card */}
          <div className="travio-single-card rounded-lg overflow-hidden">
            <div className="card-img">
              <img
                src={cardImg1}
                className="w-full h-full max-h-52 object-cover"
                alt="Travio special"
              />
              <span className="img-bottom-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <h4 className="card-title text-center py-12 text-xl font-semibold">
              2000+ Our Worldwide Guides
            </h4>
          </div>
          {/* Single Card */}
          <div className="travio-single-card rounded-lg overflow-hidden">
            <div className="card-img">
              <img
                src={cardImg2}
                className="w-full h-full max-h-52 object-cover"
                alt="Travio special"
              />
              <span className="img-bottom-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <h4 className="card-title text-center py-12 text-xl font-semibold">
              12+ Years of Travel Experience
            </h4>
          </div>
          {/* Single Card */}
          <div className="travio-single-card rounded-lg overflow-hidden">
            <div className="card-img">
              <img
                src={cardImg3}
                className="w-full h-full max-h-52 object-cover"
                alt="Travio special"
              />
              <span className="img-bottom-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <h4 className="card-title text-center py-12 text-xl font-semibold">
              2000+ Our Worldwide Guides
            </h4>
          </div>
          {/* Single Card */}
          <div className="travio-single-card rounded-lg overflow-hidden">
            <div className="card-img">
              <img
                src={cardImg4}
                className="w-full h-full max-h-52 object-cover"
                alt="Travio special"
              />
              <span className="img-bottom-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <h4 className="card-title text-center py-12 text-xl font-semibold">
              12+ Years of Travel Experience
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravioSpecilas;
