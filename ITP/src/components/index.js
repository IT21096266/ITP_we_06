export {default as Header} from './Header/Header'
export {default as Navbar} from './Nav/Navbar'
export {default as Footer} from './Footer/Footer'
export {default as MainContainer} from './MainContainer'
export {default as CreateContainer} from './CreateContainer'
export {default as HeroSlider} from './UI/HeroSlider'

import { facebook, instagram, linkedin, twitter } from '../assets';

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "aboutUs",
      title: "About Us",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact Us",
    },
  ];
  
  export const footerLinks = [
    {
      title: "Quick Links",
      links: [
        {
          name: "Home",
          link: "/home",
        },
        {
          name: "About Us",
          link: "/aboutUs",
        },
        {
          name: "Services",
          link: "/services",
        },
        {
          name: "Contact Us",
          link: "/contact",
        },
        {
          name: "Terms & Services",
          link: "/aboutUs",
        },
      ],
    }, 
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];
  
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];