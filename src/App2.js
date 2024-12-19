"use client";
import React from "react";
import { useState } from "react";

function NotMainComponent() {
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    alert("Thank you for signing up! Stay tuned for updates.");
  };

  return (
    <div className="min-h-screen bg-[#23272e] text-white font-inter relative">
      <div className="relative">
        <header className="bg-[#23272e] flex items-center justify-center p-5 text-center border-b border-[#2c3444]">
          <img
            src="https://ucarecdn.com/e9b77e85-7306-4876-95e4-c5c3326c2f43/-/format/auto/"
            alt="CricOpinion Logo"
            className="h-16 mr-4"
          />
          <div>
            <h1 className="text-4xl font-bold m-0">Welcome to CricOpinion!</h1>
            <p className="text-xl mt-2">
              Your 24x7 Destination for All Things Cricket
            </p>
          </div>
        </header>

        <main className="p-5 text-center">
          <h2 className="text-3xl text-[#998100] font-bold">
            🏏 Stay Ahead of the Game
          </h2>
          <p className="mt-3 text-white">
            We're building the ultimate cricket platform for fans like you. Get
            ready to elevate your cricket experience with exclusive access to:
          </p>

          <div className="flex flex-wrap justify-center gap-5 my-5">
            <div className="bg-[#2c3444] hover:bg-[#3d4757] transition-all duration-300 border border-[#3d4757] rounded-lg p-5 w-[250px] transform hover:-translate-y-2">
              <div className="text-4xl mb-4 text-white">
                <i className="fas fa-chart-line text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-[#998100]">
                Live Scores & Real-Time Updates
              </h3>
              <p className="text-white mt-2">
                Catch every ball, boundary, and wicket with lightning-fast
                updates.
              </p>
            </div>
            <div className="bg-[#2c3444] hover:bg-[#3d4757] transition-all duration-300 border border-[#3d4757] rounded-lg p-5 w-[250px] transform hover:-translate-y-2">
              <div className="text-4xl mb-4 text-white">
                <i className="fas fa-brain text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-[#998100]">
                Expert Match Predictions
              </h3>
              <p className="text-white mt-2">
                Outsmart your friends with spot-on insights from our cricket
                gurus.
              </p>
            </div>

            <div className="bg-[#2c3444] hover:bg-[#3d4757] transition-all duration-300 border border-[#3d4757] rounded-lg p-5 w-[250px] transform hover:-translate-y-2">
              <div className="text-4xl mb-4 text-white">
                <i className="fas fa-trophy text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-[#998100]">
                Fantasy Cricket Tips
              </h3>
              <p className="text-white mt-2">
                Level up your fantasy league game with pro strategies and
                winning advice.
              </p>
            </div>

            <div className="bg-[#2c3444] hover:bg-[#3d4757] transition-all duration-300 border border-[#3d4757] rounded-lg p-5 w-[250px] transform hover:-translate-y-2">
              <div className="text-4xl mb-4 text-white">
                <i className="fas fa-calendar-alt text-white"></i>
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
              className="bg-[#998100] text-[#1c2431] px-5 py-2 rounded hover:bg-[#796600] transition-colors font-bold"
            >
              Sign Up for Early Access
            </button>
          </div>
        </main>

        <footer className="bg-[#2c3444] text-white text-center py-4 mt-5 border-t border-[#3d4757]">
          <p className="mb-3">
            ⚙ We're Still Building Something Incredible! Follow us for updates:
          </p>
          <div className="flex justify-center gap-4">
            <i className="fab fa-instagram text-2xl hover:text-white cursor-pointer social-icon"></i>
            <i className="fab fa-twitter text-2xl hover:text-white cursor-pointer social-icon"></i>
            <i className="fab fa-facebook text-2xl hover:text-white cursor-pointer social-icon"></i>
            <i className="fab fa-reddit text-2xl hover:text-white cursor-pointer social-icon"></i>
            <i className="fab fa-flipboard text-2xl hover:text-white cursor-pointer social-icon"></i>
          </div>
        </footer>
      </div>
    </div>
  );
}

<style jsx global>{`
  .social-icon {
    transition: transform 0.3s ease;
  }

  .social-icon:hover {
    transform: scale(1.2) rotate(10deg);
  }
`}</style>;

export default NotMainComponent;