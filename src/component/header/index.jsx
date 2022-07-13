import NightlightIcon from "@mui/icons-material/Nightlight";

function Header() {
  return (
    <div className="text-white font-catamaran bg-nightlight sticky top-0 z-20">
      <div className="flex items-center justify-between px-32 md:px-8">
        <div className="text-4xl mx-8 font-bold">fairusss.</div>
        <div className=" h-14  flex items-center md:hidden">
          <div className="font-semibold mx-5 text-2xl">Home</div>
          <div className="font-semibold mx-5 text-2xl">Project</div>
          <div className="font-semibold mx-5 text-2xl">Blog</div>
          <div className="rounded-full mx-5">
            <button
              className="rounded-full"
              onClick={() => {
                console.log("hello");
              }}
            >
              <NightlightIcon className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
