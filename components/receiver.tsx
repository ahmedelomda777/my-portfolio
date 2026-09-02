import {Html} from "react-email";

  type ReceiverProps = {
  name: string;
  email: string;
  message: string;
};
export const Receiver = ({ name, email, message }:ReceiverProps) => {
  return (
    <Html lang="en" dir="ltr">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </Html>
  );
};
  