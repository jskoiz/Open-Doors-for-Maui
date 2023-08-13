import { getMembers } from "@/lib/stubApi";

const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://opendoorsformaui-git-tho-join-page-hawaiians.vercel.app";

// This is just an example of using the stub data.
// You would replace this with your actual implementation.
const members = getMembers();
console.log(members); // for checking the data in the console
