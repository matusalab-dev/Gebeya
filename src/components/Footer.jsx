import Logo from "./Logo";
import LogoImageFooter from "../../assets/img/footer-logo.png";
import InstaIcon from "../../assets/icons/insta-icon";
import WhatsIcon from "../../assets/icons/whats-icon";
import TwitterIcon from "../../assets/icons/twitter-icon";
import Link from "next/link";
import ArrowIcon from "../../assets/icons/arrow-icon";

const sections = [
  {
    title: "about",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "News & Blog", href: "/news-blog" },
      { label: "Location", href: "/location" },
    ],
  },
  {
    title: "products",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Store", href: "/store" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    title: "discover",
    links: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "Customers", href: "/customers" },
      { label: "Affiliates", href: "/affiliates" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between gap-0 mt-20 md:flex-row bg-purple inverse full-bleed">
      <div className="order-1 md:order-none flex flex-col items-center gap-10 sm:gap-16 py-12 md:py-[6.75rem] ">
        <Logo
          logoImage={LogoImageFooter}
          className="w-24 h-16 min-w-10 justify-self-start"
        />
        <div className="flex justify-center gap-6 sm:gap-4">
          <InstaIcon />
          <WhatsIcon />
          <TwitterIcon />
        </div>
      </div>
      <nav className="border-b-[1px] basis-full sm:basis-auto border-background flex flex-col md:flex-row py-12 md:py-[6.75rem] items-start justify-between gap-10 capitalize text-background">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-4 md:gap-6">
            <div className="flex items-center w-[calc(100vw_-_1rem)] md:w-auto sm:justify-start">
              <h4 className="text-xl font-semibold text-left sm:font-bold sm:text-2xl">
                {section.title}
              </h4>
              <ArrowIcon className="ml-auto cursor-pointer md:hidden size-8" />
            </div>

            <ul className="flex flex-col hidden gap-2 text-2xl md:flex">
              {section.links.map((link) => (
                <li key={link.href} className="text-lg">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </footer>
  );
};

// const Footer = () => {
//   return (
//     <footer className="flex justify-between mt-20 bg-purple inverse full-bleed">
//       <div className="flex flex-col items-center gap-16 py-[6.75rem] ">
//         <Logo
//           logoImage={LogoImageFooter}
//           className="min-w-10 justify-self-start w-52 h-[9.45rem]"
//         />
//         <div className="flex justify-center gap-6 sm:gap-4 ">
//           <InstaIcon />
//           <WhatsIcon />
//           <TwitterIcon />
//         </div>
//       </div>
//       <nav className="flex py-[6.75rem] items-start justify-between gap-10 capitalize text-background ">
//         <div className="flex flex-col gap-6 ">
//           <h4 className="text-base font-semibold sm:font-bold sm:text-3xl ">
//             about
//           </h4>
//           <ul className="flex flex-col gap-2 text-2xl">
//             <li>About Us</li>
//             <li>News & Blog</li>
//             <li>location</li>
//           </ul>
//         </div>
//         <div className="flex flex-col gap-6">
//           <h4 className="text-base font-semibold sm:font-bold sm:text-3xl ">
//             products
//           </h4>
//           <ul className="flex flex-col gap-2 text-2xl">
//             <li>pricing</li>
//             <li>store</li>
//             <li>features</li>
//           </ul>
//         </div>
//         <div className="flex flex-col gap-6">
//           <h4 className="text-base font-semibold sm:font-bold sm:text-3xl ">
//             discover
//           </h4>
//           <ul className="flex flex-col gap-2 text-2xl">
//             <li>contact us</li>
//             <li>customers</li>
//             <li>affiliates</li>
//           </ul>
//         </div>
//       </nav>
//     </footer>
//   );
// };

export default Footer;
