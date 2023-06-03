import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

const Blog = () => {
  const pdfRef = useRef(null);

  const handlePdfDownload = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("blog.pdf");
    });
  };

  const styles = {
    page: {
      marginLeft: "5rem",
      marginRight: "5rem",
      "page-break-after": "always",
    },

    columnLayout: {
      display: "flex",
      justifyContent: "space-between",
      margin: "3rem 0 5rem 0",
      gap: "2rem",
    },

    column: {
      display: "flex",
      flexDirection: "column",
    },

    spacer2: {
      height: "2rem",
    },

    fullWidth: {
      width: "100%",
    },

    marginb0: {
      marginBottom: 0,
    },
  };

  return (
    <div className="container mx-auto my-32 space-y-8">
      <h1 className="text-center text-3xl font-bold">Blogs</h1>

      <div className="text-center">
        <button
          className="inline-block rounded bg-yellow-500 px-3 py-1 text-base font-semibold md:px-5 md:py-2 md:text-lg"
          onClick={handlePdfDownload}
        >
          Generate PDF
        </button>
      </div>

      <div
        className="mx-auto w-full space-y-6 px-4 text-black md:w-8/12 md:px-0"
        ref={pdfRef}
      >
        <div
          className="space-y-4 rounded bg-yellow-500 p-5"
          style={styles.page}
        >
          <h1 className="text-2xl font-semibold" style={styles.introText}>
            1. The differences between uncontrolled and controlled components.
          </h1>
          <div className="space-y-2">
            <p>
              A controlled component is a component whose state is managed by
              the parent component. The parent component passes down state and
              behavior via props to the child component.
            </p>
            <p>
              An uncontrolled component in React is one where the component
              manages its own state internally, without relying on the parent
              component to provide state information or behavior.
            </p>
            <p>
              The controlled components rely on the parent component to manage
              state, while the uncontrolled components manage their own state.
            </p>
          </div>
        </div>

        <div
          className="space-y-4 rounded bg-yellow-500 p-5"
          style={styles.page}
        >
          <h1 className="text-2xl font-semibold" style={styles.introText}>
            2. How to validate React props using PropTypes?
          </h1>
          <div className="space-y-2">
            <p>First, install the PropTypes package using npm.</p>
            <p className="ml-5 border pl-5">
              <code>npm i prop-types</code>
            </p>
            <p>Import the PropTypes package</p>
            <p className="ml-5 border pl-5">
              <code>import PropTypes from &apos;prop-types&apos;;</code>
            </p>
            <p>
              Example of a component validating its child using{" "}
              <kbd>PropTypes</kbd>
            </p>
            <pre className="ml-5 border pl-5">
              <code>
                {`import PropTypes from 'prop-types';

function MyComponent({name, age, isStudent}) {
  // render component using props
}

MyComponent.propTypes = {
  // validate props using PropTypes
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};`}
              </code>
            </pre>
          </div>
        </div>

        <div
          className="space-y-4 rounded bg-yellow-500 p-5"
          style={styles.page}
        >
          <h1 className="text-2xl font-semibold" style={styles.introText}>
            3. The difference between nodejs and express js..
          </h1>
          <div className="space-y-2">
            <p>
              Node.js is a JavaScript runtime environment that enables
              developers to execute JavaScript code outside of a web browser.
            </p>
            <p>
              Express.js is a web framework for Node.js that provides a set of
              tools and utilities for building web applications and APIs. It is
              built on top of Node.js and provides a simpler and more
              streamlined way of building server-side applications. Express.js
              provides features such as routing, middleware, and template
              engines that make it easy to create server-side applications.
            </p>
          </div>
        </div>

        <div
          className="space-y-4 rounded bg-yellow-500 p-5"
          style={styles.page}
        >
          <h1 className="text-2xl font-semibold" style={styles.introText}>
            4. The differences between uncontrolled and controlled components.
          </h1>
          <div className="space-y-2">
            <p>
              A custom hook is a function that allows developers to reuse
              stateful logic between components. Custom hooks allow you to
              extract common functionality into a separate function, which can
              then be reused across multiple components.
            </p>
            <p>
              Custom hooks are created using the <kbd>useEffect</kbd> and{" "}
              <kbd>useState</kbd> hooks, along with any other hooks that may be
              necessary for the desired functionality.
            </p>
            <p>There are several reasons to create a custom hook:</p>
            <ol className="list-inside list-decimal marker:font-bold">
              <li>
                <span className="font-bold">Reusability:</span> Custom hooks
                allows developers to reuse stateful logic between components. By
                extracting common functionality into a separate function,
                developers can avoid code duplication and make their code more
                modular and maintainable.
              </li>
              <li>
                <span className="font-bold">Encapsulation:</span> Custom hooks
                can help to encapsulate complex stateful logic within a single
                function. This can make the code easier to understand and reason
                about, as the details of the stateful logic are hidden within
                the custom hook.
              </li>
              <li>
                <span className="font-bold">Abstraction:</span> Custom hooks can
                help to abstract away implementation details and provide a
                cleaner, more declarative API to components. This can make the
                code more readable and easier to maintain.
              </li>
              <li>
                <span className="font-bold">Testing:</span> Custom hooks can be
                easier to test than complex component logic, as they can be
                tested in isolation from the components that use them. This can
                make it easier to write unit tests and ensure that the code is
                functioning as expected.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
