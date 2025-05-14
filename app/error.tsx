"use client";

import Header from "@/_components/shared/Header";
import { useEffect, FC } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Header />
        <main>
          <h2>Something went wrong!</h2>
          <p>Error: {error.message}</p>
          <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  );
};

export default Error;
