import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="f150aacf-c686-4236-9539-7b54c66d33fa"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatPage;
