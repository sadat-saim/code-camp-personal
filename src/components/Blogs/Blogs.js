import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <article className="bg-base-300 p-6 mx-2 my-6 rounded-md">
        <h2 className="text-2xl font-secularone">
          What is <span className="text-primary">Cors</span>?
        </h2>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </article>
      <article className="bg-base-300 p-6 mx-2 my-6 rounded-md">
        <h2 className="text-2xl font-secularone">
          Why are you using <span className="text-primary">Firebase</span>? What
          other options do you have to implement authentication?
        </h2>
        <p>
          The Firebase is a Backend-as-a-Service (BaaS) that offers the
          developers a wide spectrum of tools and services to develop
          high-quality apps at a much faster pace.Nowadays, most of the apps
          have the login facility and the developer aims to simplify and secure
          it better. Therefore, the support of Firebase Authentication is there
          to do that task with an easy sign-in process. It also provides
          identity solution for the emails, passwords and other important apps
          such as Facebook, Twitter or Instagram. The Firebase UI is also
          flexible, customized and drop-in dealing with the UI flow of the
          users. There is no compromise from the security point of view. That is
          why I am using firebase. Alternavies of firebase authentication are{" "}
          <span className="text-primary">Auth0</span>,
          <span className="text-primary">Passport</span>,
          <span className="text-primary">Okta</span>,
          <span className="text-primary">JSON web token</span> etc.
        </p>
      </article>
      <article className="bg-base-300 p-6 mx-2 my-6 rounded-md">
        <h2 className="text-2xl font-secularone">
          How does the <span className="text-primary">Private Route</span>
          works?
        </h2>
        <p>
          The react private route component renders child components (children)
          if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property.
        </p>
      </article>
      <article className="bg-base-300 p-6 mx-2 my-6 rounded-md">
        <h2 className="text-2xl font-secularone">
          What is <span className="text-primary">Node</span>? How does{" "}
          <span className="text-primary">Node</span> works?
        </h2>
        <p>
          Node.js is the JavaScript runtime environment which is based on
          Google’s V8 Engine i.e. with the help of Node.js we can run the
          JavaScript outside of the browser.Node JS uses an event-driven,
          non-blocking I/O model that makes it lightweight and efficient. Node
          JS applications uses single threaded event loop architecture to handle
          concurrent clients. Actually its' main event loop is single threaded
          but most of the I/O works on separate threads, because the I/O APIs in
          Node JS are asynchronous/non-blocking by design, in order to
          accommodate the main event loop.
        </p>
      </article>
    </div>
  );
};

export default Blogs;
