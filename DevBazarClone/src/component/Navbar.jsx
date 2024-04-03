import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
  return (
    <div className="shadow container  px-10 py-2 flex justify-between">
      <h1 className="text-2xl">DEV BAZAR</h1>
      <div className="flex justify-between font-normal w-36 sm:ml-1">
        <span className=" flex cursor-pointer text-xl">Home</span>
        <span className=" flex cursor-pointer text-xl">Product</span>
      </div>
      <div className="flex w-24 space-x-4">
        <AccountCircleIcon />
        <FavoriteIcon />
        <ShoppingCartIcon />
      </div>
    </div>
  );
};
export default Navbar;
