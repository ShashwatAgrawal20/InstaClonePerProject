import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const { data: session } = useSession();
  const [Suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const Suggestions = [...Array(20)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      id: i,
    }));
    setSuggestions(Suggestions);
  }, []);

  return (
    // Implemented faker js might implemented real data later
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story image={session.user.image} username={session?.user.username} />
      )}
      {Suggestions.map((profile) => (
        <Story
          key={profile.id}
          image={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
