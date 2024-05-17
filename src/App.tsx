import { NetworkStatusIndicator } from '@/components/use-network-alert';
import { initialDraft, postInitialData } from '@/shared/constants';
import { useLocalStorage, useNetworkState } from '@uidotdev/usehooks';
import * as Lucide from 'lucide-react';
import moment from 'moment';
import * as React from 'react';
import { Post } from './types';

export const App = () => {
  const { online: isOnline } = useNetworkState();
  const [posts, setPosts] = useLocalStorage<Post[]>('posts', postInitialData);
  const [draft, setDraft] = React.useState<typeof initialDraft>(initialDraft);

  const handleCreatePost = () => {
    const mockedPost: Post = {
      id: crypto.randomUUID(),
      body: draft.text,
      createdAt: new Date().toISOString(),
      needToSync: true,
      user: {
        name: crypto.randomUUID().slice(0, 8).concat('-user'),
        image: ''
      }
    };
    setPosts((state) => [...state, mockedPost]);
    setDraft(initialDraft);
  };

  React.useEffect(() => {
    const unsavedPosts = posts.filter((post) => post.needToSync === true);

    if (unsavedPosts.length > 0) {
      if (!isOnline) {
        return alert('You have posts that need to be synced');
      }
      // TODO: sync unsaved posts here
    }
  }, [isOnline, posts]);

  return (
    <>
      <NetworkStatusIndicator />
      <main className="relative mx-auto w-full max-w-sm py-5">
        <section className="flex items-center justify-between gap-3 border-b p-3">
          <h1 className="font-bold ">Home</h1>
          <Lucide.BellDot className="h-auto w-5" />
        </section>

        <section className="relative flex items-center justify-between gap-3 p-3">
          <div className="flex items-center gap-2">
            <Lucide.User className="h-auto w-8 rounded-full border p-1" />
            <input
              type="text"
              placeholder="Write a post..."
              className="rounded-full border p-1 px-2"
              value={draft.text}
              onChange={(e) => setDraft((state) => ({ ...state, text: e.target.value }))}
            />
          </div>
          <div className="flex items-center gap-1">
            <button
              title="Create new post"
              onClick={handleCreatePost}
              className="grid place-content-center rounded-full border bg-blue-500 p-1">
              <span className="sr-only">Create post</span>
              <Lucide.Send className="h-auto w-4 stroke-white" />
            </button>
            <button className="grid place-content-center rounded-full border bg-lime-700 p-1">
              <Lucide.ImagePlusIcon className="h-auto w-4 stroke-white" />
            </button>
            <button className="grid place-content-center rounded-full border bg-yellow-500 p-1">
              <Lucide.Video className="h-auto w-4 stroke-white" />
            </button>
          </div>
        </section>

        <ul className="flex flex-col border-t py-3">
          {posts.length > 0 &&
            posts
              .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
              .map((post) => (
                <li key={post.id} className="flex flex-col border-b p-3">
                  <section className="flex flex-nowrap justify-between">
                    <div className="flex items-center gap-2">
                      {post.user.image && (
                        <img
                          src={post.user.image}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      )}
                      {!post.user.image && (
                        <Lucide.User className="h-auto w-8 rounded-full border p-1" />
                      )}
                      <div className="flex flex-col">
                        <h3 className="text-nowrap text-sm font-medium">
                          {post.user.name}
                        </h3>
                        <span className="text-sm">{moment().from(post.createdAt)}</span>
                      </div>
                    </div>

                    <div className="flex flex-nowrap items-center gap-2">
                      <a href={`/post/${post.id}`} className="grid place-content-center">
                        <Lucide.ExternalLinkIcon className="h-auto w-4" />
                      </a>
                      <button className="grid place-content-center">
                        <Lucide.MoreVertical className="h-auto w-4" />
                      </button>
                    </div>
                  </section>
                  <section className="my-3">
                    <p>{post.body}</p>
                  </section>
                </li>
              ))}
        </ul>

        <section className="fixed bottom-3 left-[calc(50%_-_125px)] flex w-[250px] items-center justify-evenly gap-1 rounded-full border-black bg-blue-500/60 p-2 backdrop-blur">
          <button className="grid place-content-center rounded-full p-1 hover:bg-white/20 ">
            <Lucide.HomeIcon className="h-auto w-4 stroke-white" />
          </button>
          <button className="grid place-content-center rounded-full p-1 hover:bg-white/20 ">
            <Lucide.SearchIcon className="h-auto w-4 stroke-white" />
          </button>
          <button className="grid place-content-center rounded-full p-1 hover:bg-white/20 ">
            <Lucide.Share className="h-auto w-4 stroke-white" />
          </button>
          <button className="grid place-content-center rounded-full p-1 hover:bg-white/20 ">
            <Lucide.MessageCircleMore className="h-auto w-4 stroke-white" />
          </button>
          <button className="grid place-content-center rounded-full p-1 hover:bg-white/20 ">
            <Lucide.User className="h-auto w-4 stroke-white" />
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
