import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className=" px-4 py-2 flex items-center justify-between bg-stone-800">
      <p>Logo</p>
      <Button className="bg-yellow-400 rounded-2xl font-semibold outline-none focus:ring-offset-2 text-stone-800  focus:ring transition duration-300 focus:ring-yellow-100 hover:bg-yellow-200">
        Logout
      </Button>
    </div>
  );
}

export default Header;
