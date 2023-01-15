import React from "react";

const Blogs = () => {
  return (
    <div>
      {/* <Helmet>
                <title>Blog</title>
            </Helmet> */}

      <div className="border-4 border-primary p-5 m-5">
        <h1 className="font-bold text-2xl">
          Question .1 :What are the different ways to manage a state in a React
          application? ?{" "}
        </h1>
        <h1 className=" font-extrabold underline  text-secondary">Answer</h1>

        <p>
          The Four Kinds of React State to Manage When we talk about state in
          our applications, its important to be clear about what types of state
          actually matter. There are four main types of state you need to
          properly manage in your React apps:
          <ol>
            <li>01 .Local state</li>
            <li>2. Global state</li>
            <li>3. Server state</li>
            <li>4. URL state</li>
            <li>5. Etc</li>
          </ol>
        </p>
      </div>

      <div className="border-4 border-primary p-5 m-5">
        <h1 className="font-bold text-2xl">
          Question .2 :How does prototypical inheritance work?
        </h1>
        <h1 className=" font-extrabold underline  text-secondary">Answer</h1>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>
      </div>

      <div className="border-4 border-primary p-5 m-5 gap-5 grid">
        <h1 className="font-bold text-2xl">
          Question .3 : What is a unit test? Why should we write unit tests?
        </h1>
        <h1 className=" font-extrabold underline  text-secondary">Answer</h1>
        <p>
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
      </div>
      <div className="border-4 border-primary p-5 m-5 grid gap-6">
        <h1 className="font-bold text-2xl">
          Question .4 : React vs. Angular vs. Vue?{" "}
        </h1>
        <h1 className=" font-extrabold underline  text-secondary">Answer</h1>
        <p>
          <h1 className="text-xl">Angular vs React</h1> <br />
          If the choice youre making is based on Angular vs React alone, then
          youll simply need to consider the pros and cons discussed for those
          libraries in this post. But overall, keep in mind that both libraries
          can be used for mobile and web apps, while Angular is generally better
          for more complex apps that are enterprise-ready. React often requires
          extra modules and components, which keeps the core library small, but
          means theres extra work involved when incorporating outside tools.
          Angular, on the other hand, is more of a full-fledged solution that
          doesnt require extras like React often does, though it does have a
          steeper learning curve for its core compared to React. React is more
          suitable for intermediate to advanced JavaScript developers who are
          familiar with concepts from ES6 and up, while Angular favors those
          same developers who are also familiar with TypeScript.
        </p>
        <p>
          <h1 className="text-xl">Angular vs Vue</h1> <br />
          In most cases, you probably wouldnt be deciding between only Angular
          and Vue. They are vastly different libraries with very different
          feature sets and learning curves. Vue is the clear choice for less
          experienced developers, and Angular would be preferred for those
          working on larger apps. A large library like Angular would require
          more diligence in keeping up with whats new, while Vue would be less
          demanding in this regard and the fact that the two most recent major
          releases of Vue are in separate repositories helps. It should also be
          noted that Vue was created by a developer who formerly worked on
          Angular for Google, so thats another thing to keep in mind, though
          that wouldnt have a huge impact on your decision.
        </p>
        <p>
          <h1 className="text-xl">React vs Vue</h1> <br />
          The choice between React vs Vue is often debated and its not an easy
          one. Vue has a vibrant and ever-growing community and has taken over
          popularity vs. React in many respects. React developers are still
          churning out lots of new components and extras, so theres no sign that
          React is on the decline either. Vue is generally more suited to
          smaller, less complex apps and is easier to learn from scratch
          compared to React. Vue can be easier to integrate into new or existing
          projects and many feel its use of HTML templates along with JSX is an
          advantage. Overall, Vue might be the best choice if youre a newer
          developer and not as familiar with advanced JavaScript concepts, while
          React is quite well suited for experienced programmers and developers
          who have worked with object-oriented JavaScript, functional
          JavaScript, and similar concepts.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
