export default function ChatBubble() {
  return (
    <div className="flex flex-col h-screen ">
      <div className="text-xl sticky mt-4 h-[56px] shadow-lg">
        <div className="flex items-center pl-4 gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-10 w-10">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>

        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
      <div className="p-4 bottom-0 w-full flex gap-2">
        <input
          type="text"
          placeholder="Type here..."
          className="input input-bordered w-full"
        />

        <button className="h-8 w-8 pt-2">
          <img src="/icons/send-svgrepo-com.svg" />
        </button>
      </div>
    </div>
  );
}

