import * as React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import {
  Bell,
  BellDot,
  ExternalLinkIcon,
  HomeIcon,
  ImagePlusIcon,
  MessageCircleMore,
  MoreHorizontal,
  MoreVertical,
  PartyPopperIcon,
  SearchIcon,
  Share,
  Upload,
  User,
  Video,
} from "lucide-react";
import { postInitialData } from "./shared/constants";
import { Post } from "./types";

export const App = () => {
  const [posts, setPosts] = useLocalStorage<Post[]>("posts", postInitialData);
  const [isOffline, setIsOffline] = React.useState(false);
  
  const [draft, setDraft] = React.useState({
    text: "",
    image: "",
    video: "",
  });

  const createPost = () => {



    const mockedPost :Post= {
      id: crypto.randomUUID(),
      body: draft.text,
      createdAt: new Date().toISOString(),
      needToSync:true,
      user: {
        name: "",
        image: ""
      }
    }
  };

  return (
    <main className="w-full max-w-sm py-5 mx-auto relative">
      <section className="flex items-center gap-3 p-3 justify-between border-b">
        <h1 className="font-bold ">Home</h1>
        <BellDot className="w-5 h-auto" />
      </section>

      <section className="flex items-center justify-between gap-3 p-3 relative">
        <div className="flex items-center gap-2">
          <User className="w-8 h-auto p-1 rounded-full border" />
          <input
            type="text"
            placeholder="Write a post..."
            className="border rounded-full p-1 px-2"
            value={draft.text}
            onChange={(e) =>
              setDraft((state) => ({ ...state, text: e.target.value }))
            }
          />
        </div>
        <div className="flex items-center gap-1">
          <button className="grid place-content-center rounded-full bg-blue-500 p-1 border">
            <span className="sr-only">create post</span>
            <PartyPopperIcon className="h-auto w-4 stroke-white" />
          </button>
          <button className="grid place-content-center rounded-full bg-lime-700 p-1 border">
            <ImagePlusIcon className="h-auto w-4 stroke-white" />
          </button>
          <button className="grid place-content-center rounded-full bg-yellow-500 p-1 border">
            <Video className="h-auto w-4 stroke-white" />
          </button>
        </div>
      </section>

      <ul className="flex flex-col border-t py-3">
        {posts.length > 0 &&
          posts.map((post) => (
            <li key={post.id} className="border-b p-3 flex flex-col">
              <section className="flex flex-nowrap justify-between">
                <div className="flex items-center gap-2">
                  {post.user.image && (
                    <img
                      src={post.user.image}
                      className="rounded-full object-cover w-full max-w-[40px]"
                    />
                  )}
                  {!post.user.image && (
                    <User className="w-8 h-auto p-1 rounded-full border" />
                  )}
                  <h3>{post.user.name}</h3>
                </div>

                <div className="flex flex-nowrap gap-2 items-center">
                  <a
                    href={`/post/${post.id}`}
                    className="grid place-content-center"
                  >
                    <ExternalLinkIcon className="h-auto w-4" />
                  </a>
                  <button className="grid place-content-center">
                    <MoreVertical className="h-auto w-4" />
                  </button>
                </div>
              </section>
              <section>
                <p>{post.body}</p>
              </section>
            </li>
          ))}
      </ul>

      <section className="w-[250px] fixed rounded-full left-[calc(50%_-_125px)] bottom-3 p-2 bg-blue-500/60 backdrop-blur border-black flex items-center gap-1 justify-evenly">
        <button className="grid place-content-center hover:bg-white/20 rounded-full p-1 ">
          <HomeIcon className="h-auto w-4 stroke-white" />
        </button>
        <button className="grid place-content-center hover:bg-white/20 rounded-full p-1 ">
          <SearchIcon className="h-auto w-4 stroke-white" />
        </button>
        <button className="grid place-content-center hover:bg-white/20 rounded-full p-1 ">
          <Share className="h-auto w-4 stroke-white" />
        </button>
        <button className="grid place-content-center hover:bg-white/20 rounded-full p-1 ">
          <MessageCircleMore className="h-auto w-4 stroke-white" />
        </button>
        <button className="grid place-content-center hover:bg-white/20 rounded-full p-1 ">
          <User className="h-auto w-4 stroke-white" />
        </button>
      </section>
    </main>
  );
};

export default App;
