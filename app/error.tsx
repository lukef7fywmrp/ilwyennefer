"use client";

type Props = {
  error: Error;
};

function Error({ error }: Props) {
  return <div>Oops!! Something went wrong...</div>;
}

export default Error;
