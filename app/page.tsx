import ChatsTable from "./components/chatsTable";
import ChatBubble from "./components/chatBubble";

export default function Home() {
  return (
    <div className="flex h-full" data-theme="autumn">
      <div className="w-1/4">
        <ChatsTable />
      </div>
      <div className="w-3/4">
        <ChatBubble />
      </div>
    </div>
  );
}
