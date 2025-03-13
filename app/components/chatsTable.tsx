"use client";
import { useRouter } from "next/navigation";

export default function ChatsTable() {
  const router = useRouter();

  const handleRowClick = (id: number) => {
    router.push(`/chat/${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const data = [
    {
      id: 1,
      name: "Edi",
      message: "Message",
      img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },
    {
      id: 2,
      name: "Brice Swyre",
      message: "Message",
      img: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    },
    {
      id: 3,
      name: "Marjy Ferencz",
      message: "Message",
      img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
      id: 4,
      name: "Marjy Ferencz",
      message: "Message",
      img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
      id: 5,
      name: "Marjy Ferencz",
      message: "Message",
      img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
      id: 6,
      name: "Marjy Ferencz",
      message: "Message",
      img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
      id: 7,
      name: "Marjy Ferencz",
      message: "Message",
      img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
      id: 8,
      name: "Marjy Ferencz",
      message: "Message",
      img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
      id: 9,
      name: "Marjy Ferencz",
      message: "Message",
      img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
  ];

  return (
    <div className="min-h-screen flex shadow-lg flex-col mt-2 overflow-x-auto">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-2xl pl-2 text-neutral-400 font-bold">Chats</h2>
        <button
          onClick={handleLogout}
          className="ml-2 px-3 py-1  text-white rounded-full hover:bg-red-500 transition"
        >
          <img src="/icons/logout.png" className="h-6 w-6" />
        </button>
      </div>
      <div className="p-2 shadow-lg">
        <label className="flex items-center gap-2 h-8 border rounded px-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex-grow overflow-y-auto max-h-[600px]">
        <table className="table table-fixed w-full h-full">
          <tbody className="h-full">
            {data.map((user) => (
              <tr
                key={user.id}
                className="cursor-pointer hover:bg-zinc-300 h-[80px]"
                onClick={() => handleRowClick(user.id)}
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.message}</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
            <tr className="flex-grow"></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
