import { Message } from "rsuite";
const Toast = ({ msg }: { msg: string }) => (
  <Message showIcon type="error">
    Error: {msg}
  </Message>
);
export default Toast;
