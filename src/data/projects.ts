import momentum from "../assets/momentum.png";
import travel from "../assets/travel.png";
import store from "../assets/online_store.png";
import birds from "../assets/bird_song.png";

type Project = {
  name: string;
  href: string;
  picture: string;
};

export const projects: Project[] = [
  {
    name: "Momentum",
    href: "https://rolling-scopes-school.github.io/kovalev-ds-JSFEPRESCHOOL2022Q2/momentum/",
    picture: momentum,
  },
  {
    name: "Travel",
    href: "https://rolling-scopes-school.github.io/kovalev-ds-JSFEPRESCHOOL2022Q2/Travel/",
    picture: travel,
  },
  {
    name: "Online Store",
    href: "https://magenta-taffy-bbd959.netlify.app/",
    picture: store,
  },
  {
    name: "Bird Song",
    href: "https://kovalev-ds.github.io/bird-song/",
    picture: birds,
  },
];
