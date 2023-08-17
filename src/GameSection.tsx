import React from 'react';
import AsteroidsAheadImage from './images/AsteroidsAhead.png';
import PuzzleGameImage from './images/puzzleGame.png';

const GameSection: React.FC = () => {
  return (
    <div id="game-section" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-3xl font-semibold">Games</h2>
          <div className="game-section-container">
            <div className="game grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="game-content-container">
                <h3 className="text-4xl font-bold">Asteroids Ahead</h3>
                <img src={AsteroidsAheadImage} alt="Asteroids Ahead" className="mt-4 w-full rounded-lg shadow-lg" />
              </div>
              <div className="game-content-container">
                <h3 className="text-4xl font-bold">Watch and Roll</h3>
                <img src={PuzzleGameImage} alt="Watch and Roll" className="mt-4 w-full rounded-lg shadow-lg" />
              </div>
              <div className="game-content-container">
                <h3 className="text-4xl font-bold">Rainbow Run</h3>
                <img src={AsteroidsAheadImage} alt="Rainbow Run" className="mt-4 w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
