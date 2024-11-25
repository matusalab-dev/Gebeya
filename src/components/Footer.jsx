import Logo from "./Logo";
import LogoImageFooter from "../../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col gap-2">
        <Logo logoImage={LogoImageFooter} />
      </div>
    </footer>
  );
};

export default Footer;
