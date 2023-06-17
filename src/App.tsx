import avatar from "./assets/me.png";

import { info, profile, skills, courses, projects } from "./data";

function App() {
  return (
    <>
      <header className="py-8">
        <div className="container">
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <img className="h-60 w-60 rounded-full" src={avatar} alt="me" />
            <h1 className="font-medium text-3xl">
              Denis <span className="text-blue-500">Kovalev</span>
            </h1>
            <ul className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-lg">
              {info.map(({ title, data }) => (
                <li>
                  <span className="text-blue-500 font-medium">{title}:</span>{" "}
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="py-4">
        <div className="container">
          <h2 className="subtitle mb-2">Profile</h2>
          {profile.map((paragraph) => (
            <p className="mb-2">{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <h2 className="subtitle mb-2">Skills</h2>
          <ul className="flex flex-col gap-y-1 list-inside list-disc">
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <h2 className="subtitle mb-2">Courses</h2>
          <ul className="flex flex-col gap-y-2 list-inside list-disc">
            {courses.map((course) => (
              <li>{course}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <h2 className="subtitle mb-2">Experience</h2>
          <div className="grid md:grid-cols-2 md:gap-4">
            {projects.map(({ name, href, picture }) => (
              <div>
                <h4 className="title mb-4">
                  Project <strong>`{name}`</strong>:
                </h4>
                <a className="mb-4" target="_blank" href={href}>
                  <img className="object-cover" src={picture} alt={name} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 mb-8">
        <div className="container">
          <h2 className="subtitle mb-2">Education</h2>
          <ul className="list-inside list-disc">
            <li>
              University: Francisk Skorina Gomel State University, Physics and
              IT (in proccess)
            </li>
          </ul>
        </div>
      </section>

      <footer className="bg-neutral-100">
        <div className="container text-center py-4">
          <a
            className="underline hover:no-underline"
            href="https://kovalev-ds.github.io/rsschool-cv/"
          >
            Web Version
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
