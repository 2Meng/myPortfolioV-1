import React from "react";

function Projects() {
  return (
    <section className="Projects-section overflow-x-hidden">
      <div
        className="project-one m-20 md:flex md:items-center
            md:justify-between"
      >
        <div className="md:flex-col mx-20">
          <h2 className="text-4xl my-10">Whos that Pokemon!</h2>
          <p className="max-w-screen-md">
            This project is a Pokemon guesser where the user is presented with a
            Pokemon and blank spaces and their object is to guess the Pokemon.
            This was built by a group of 4 who wanted to give users the
            nostalgic experience from the old Pokemon tv shows! With this being
            our first big project.. we had some troubles with the Pokemon API
            that we used. Some of the names of the Pokemon were inconsistent
            when called so when guessing the name.
          </p>

          <div className="my-10">
            <h3 className="text-2xl my-4">Links</h3>
            <a
              className="mr-10"
              href="https://github.com/2Meng/Whos-that-pokemon"
            >
              Github
            </a>
            <a href="https://2meng.github.io/Whos-that-pokemon/">Website</a>
          </div>
        </div>

        <img
          className="mx-20"
          src="./imgs/PokemonSite.png"
          alt="whos-that-pokemon-img"
        ></img>
      </div>

      <div
        className="project-two m-20 md:flex md:items-center
            md:justify-between"
      >
        <div className="md:flex-col mx-20">
          <h2 className="text-4xl my-10">Flower Tetris</h2>
          <p className="max-w-screen-md">
            This is a Tetris replica website built to allow users to play
            Tetris, create a profile and login then save their scores to compete
            with other users..! This project was built as a group with other
            classmates after learning databases and routing. Things we had
            trouble with on this project were applying databases and setting up
            routes at the start.. We spent some time at the tailend of the
            project working on getting comments to work out... just to find out
            we were missing a variable!
          </p>

          <div className="my-10">
            <h3 className="text-2xl my-4">Links</h3>
            <a
              className="mr-10"
              href="https://github.com/adamrobinson55/Tetris-App"
            >
              Github
            </a>
            <a href="https://mighty-basin-04086-f81a28957a55.herokuapp.com/">
              Website
            </a>
          </div>
        </div>

        <img
          className="mx-20"
          src="./imgs/flowertetris.png"
          alt="flower-tetris-img"
        ></img>
      </div>

      <div className="project-three m-20 md:flex md:items-center md:justify-between ">
        <div className="md:flex-col mx-20">
          <h2 className="text-4xl my-10">Dreamscape</h2>
          <p className="max-w-screen-md">
            This is a MERN stack website made for users with a purpose aimed
            towards mental wellness allowing users to create their own
            Dreamscape story experiences and share them with other users. As
            this being my final group project.. we definitely faced a lot of
            challenges having to put everything we learned together.. One of the
            biggest challenges being JWT, it gave us trouble accesssing the
            Dreamforge page where users could build their own stories due to the
            need to be logged in.
          </p>

          <div className="my-10">
            <h3 className="text-2xl my-4">Links</h3>
            <a
              className="mr-10"
              href="https://github.com/AndrewNalley/dreamscape"
            >
              Github
            </a>
            <a href="https://whispering-crag-58704-755d34513186.herokuapp.com/">
              Website
            </a>
          </div>
        </div>

        <img
          className="mx-20"
          src="./imgs/dreamscape.png"
          alt="dreamscape img"
        ></img>
      </div>
    </section>
  );
}

export default Projects;
