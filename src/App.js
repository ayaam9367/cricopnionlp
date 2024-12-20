import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBrain,
  faTrophy,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFlipboard,
  faInstagram,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { useState } from "react";

function MainComponent() {
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    alert("Thank you for signing up! Stay tuned for updates.");
  };

  return (
    <div className="relative min-h-screen w-full text-white font-inter">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/cricdunia_lp.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="relative min-h-screen bg-[#23272e]/90 w-full">
        <header className=" flex flex-col items-center justify-center p-5 text-center border-b border-[#2c3444]">
          <h1 className="text-3xl font-bold m-0 flex items-center gap-2 flex-col sm:flex-row z-20">
            <span>Welcome to</span>
            <img
              src="https://ucarecdn.com/52328c1e-7703-42be-b131-eae7b2aa91de/-/format/auto/"
              alt="CricOpinion Logo"
              className="inline h-[40px]"
            />
          </h1>
          <p className="text-xl mt-2 z-20">
            Your 24x7 Destination for All Things Cricket
          </p>
        </header>

        <main className="p-5 text-center">
          <div className="my-8">
            <p className="mb-4 text-white">
              🔔 Don't Miss Out! Be the first to know when CricOpinion goes
              live. Sign up now for exclusive early access!
            </p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-[#2c3444] border border-[#3d4757] rounded mr-2 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSignUp}
              className="mt-3 bg-[#998100] text-[#1c2431] px-5 py-2 rounded hover:bg-[#baae6b] transition-colors font-bold"
            >
              Sign Up for Early Access
            </button>
          </div>
          <h2 className="text-3xl text-[#998100] font-bold z-20 mt-12">
            🏏 Stay Ahead of the Game
          </h2>
          <p className="mt-3 text-white z-20">
            We're building the ultimate cricket platform for fans like you. Get
            ready to elevate your cricket experience with exclusive access to:
          </p>

          <div className="flex flex-wrap justify-center gap-5 my-5">
            <div className="bg-[#2c3444] hover:bg-[#3d4757] transition-all duration-300 border border-[#3d4757] rounded-lg p-5 w-[250px] transform hover:-translate-y-2 z-20">
              <div className="text-4xl mb-4 text-white">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="text-xl font-bold text-[#998100]">
                Live Scores & Real-Time Updates
              </h3>
              <p className="text-white mt-2">
                Catch every ball, boundary, and wicket with lightning-fast
                updates.
              </p>
            </div>

            <div className="bg-[#2c3444] hover:bg-[#3d4757] transition-all duration-300 border border-[#3d4757] rounded-lg p-5 w-[250px] transform hover:-translate-y-2 z-20">
              <div className="text-4xl mb-4 text-white">
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h3 className="text-xl font-bold text-[#998100]">
                Expert Match Predictions
              </h3>
              <p className="text-white mt-2">
                Outsmart your friends with spot-on insights from our cricket
                gurus.
              </p>
            </div>

            <div className="bg-[#2c3444] hover:bg-[#3d4757] transition-all duration-300 border border-[#3d4757] rounded-lg p-5 w-[250px] transform hover:-translate-y-2 z-20">
              <div className="text-4xl mb-4 text-white">
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <h3 className="text-xl font-bold text-[#998100]">
                Fantasy Cricket Tips
              </h3>
              <p className="text-white mt-2">
                Level up your fantasy league game with pro strategies and
                winning advice.
              </p>
            </div>

            <div className="bg-[#2c3444] hover:bg-[#3d4757] transition-all duration-300 border border-[#3d4757] rounded-lg p-5 w-[250px] transform hover:-translate-y-2 z-20">
              <div className="text-4xl mb-4 text-white">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <h3 className="text-xl font-bold text-[#998100]">
                Comprehensive Schedules & Stats
              </h3>
              <p className="text-white mt-2">
                From international tournaments to domestic leagues – get all the
                details in one place.
              </p>
            </div>
          </div>
        </main>

        <footer className=" text-white text-center py-4 mt-5 border-t border-[#2c3444]">
          <p className="mb-3">
            ⚙ We're Still Building Something Incredible! Follow us for updates:
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/cricopinion24x7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-white cursor-pointer text-2xl"
              />
            </a>

            <a
              href="https://x.com/Cricopinion247"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="hover:text-white cursor-pointer text-2xl"
              />
            </a>

            <a
              href="https://www.facebook.com/cricopinion24x7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-white cursor-pointer text-2xl"
              />
            </a>

            <a
              href="https://www.reddit.com/user/cricopinion24x7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faReddit}
                className="hover:text-white cursor-pointer text-2xl"
              />
            </a>

            <a
              href="https://flipboard.com/@CricOpinion24x7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFlipboard}
                className="hover:text-white cursor-pointer text-2xl"
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainComponent;
