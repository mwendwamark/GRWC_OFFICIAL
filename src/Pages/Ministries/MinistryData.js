import {
  RiBox3Line,
  RiWomenLine,
  RiParentLine,
  RiEmotionHappyLine,
  RiMusic2Line,
} from "@remixicon/react";
import BishopPreaching from "../../assets/Images/AboutImages/BishopPreaching.webp";
import GRWC3 from "../../assets/Images/GRWC/GRWC3.webp";
import ChoirImage from "../../assets/Images/HomeImages/Choir.webp";
import SundaySchool3 from "../../assets/Images/HomeImages/SundaySchool3.webp";
// import MenGathering from "../../assets/Images/Ministries/MenGathering.webp";

export const mensMinistryData = {
  meta: {
    className: "mens_ministry_page",
  },
  hero: {
    icon: RiBox3Line,
    title: "Men's Ministry",
    image: BishopPreaching,
    imageAlt: "Revival wave men",
    faqLink: "#mens_faqs",
    className: "mens_hero_icon",
  },
  subHero: {
    titleTop: "men's ministry at Gospel Revival Wave Church",
    title:
      "Developing men to live faithfully, engage missionally, and worship joyfully",
    // You can add a specific background color class or style here if needed
    // For now we will handle it via CSS classes or inline styles in the layout if passed
    className: "mens_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We create spaces where men can proactively use the gifts, relationships, and opportunities they have to make disciples for God’s glory. Through events, groups, and retreats, we equip men to be faithful in the places and seasons God has placed them, both now and in the future.",
      "Men’s Ministry at Gospel Revival connects, equips, and mobilizes men for the work of ministry and the glory of Jesus",
    ],
    images: [BishopPreaching, BishopPreaching], // Using the same image as placeholder for the second one as in original
    className: "men_activities",
  },
  faq: {
    id: "mens_faqs",
    questions: [
      {
        question: "How can I get involved in Men's Ministry?",
        answer:
          "We encourage you to join us for a gathering at your congregation or attend a retreat! You can directly contact a Men's Ministry representative from your congregation for more information.",
      },
      {
        question: "What can I expect from a men's gathering or a retreat?",
        answer:
          "While each congregation holds gatherings and retreats in a slightly different manner, we hope these spaces serve as a casual, easy pathway to get to know other men in our congregation and be empowered to follow Jesus in your daily life.",
      },
      {
        question:
          "What types of groups do you have for men at Gospel Revival Wave Church?",
        answer:
          "A meaningful way we hope to foster discipleship at Gospel Revival Wave Church is through groups that meet regularly. These groups typically include women and men. You can contact your congregation's Connection Director for next steps on how to get involved with a group at Gospel Revival Wave Church.",
      },
      {
        question: "Is there any additional care that's available for me?",
        answer:
          "Our counseling center provides direct biblical counseling services, as well as groups and classes. They also have resources for walking through substance abuse, infidelity, recovery, and more. We'd also love to get to know you and connect you to pastoral care in your congregation if needed. Contact your congregation's Men's Ministry representative for more information.",
      },
    ],
  },
};

export const womenMinistryData = {
  meta: {
    className: "women_ministry_page",
  },
  hero: {
    icon: RiWomenLine, // Placeholder
    title: "Women's Ministry",
    image: BishopPreaching, // Placeholder
    imageAlt: "Revival wave women",
    faqLink: "#women_faqs",
    className: "women_hero_icon",
  },
  subHero: {
    titleTop: "women's ministry at Gospel Revival Wave Church",
    title: "Empowering women to walk in faith, love, and service",
    className: "women_subhero",
  },
  activities: {
    title: "What We Do",
    description: ["Women's Ministry description placeholder."],
    images: [BishopPreaching, BishopPreaching],
    className: "women_activities",
  },
  faq: {
    id: "women_faqs",
    questions: [
      {
        question: "How can I get involved in Women's Ministry?",
        answer: "Contact us for more information.",
      },
    ],
  },
};

export const sundaySchoolMinistryData = {
  meta: {
    className: "sundayschool_ministry_page",
  },
  hero: {
    icon: RiParentLine,
    title: "Sunday School",
    image: SundaySchool3,
    imageAlt: "Sunday School",
    faqLink: "#sundayschool_faqs",
    className: "sundayschool_hero_icon",
  },
  subHero: {
    titleTop: "Sunday School at Gospel Revival Wave Church",
    title: "Teaching children the way of the Lord",
    className: "sundayschool_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "Our Sunday School ministry is dedicated to laying a strong biblical foundation for children. We provide a safe, fun, and engaging environment where kids can learn about God's love through stories, songs, and crafts.",
      "We believe in partnering with parents to raise a generation that knows and loves Jesus. Our curriculum is designed to be age-appropriate and impactful, helping children navigate their faith journey from a young age.",
    ],
    images: [SundaySchool3, SundaySchool3],
    className: "sundayschool_activities",
  },
  faq: {
    id: "sundayschool_faqs",
    questions: [
      {
        question: "What ages are included in Sunday School?",
        answer:
          "We have classes/levels for children ranging from toddlers to pre-teens (ages 3-12). Each level is tailored to their specific developmental stage.",
      },
      {
        question: "When is Sunday School held?",
        answer:
          "Sunday School runs concurrently with our main Sunday service, starting at 11:30 AM.",
      },
      {
        question: "Is there a nursery for younger children?",
        answer:
          "No, we do not have a nursery for infants and toddlers under 3 years old. We advice parents to stay with their children (below 3 years old) in the main service.",
      },
      {
        question: "How do you ensure the safety of the children?",
        answer:
          "Safety is our top priority. All our volunteers undergo background checks. We have a register for all children in all levels",
      },
      {
        question: "Can parents stay with their children?",
        answer:
          "Parents are welcome to settle their children in, but we encourage them to join the main service so they can also be spiritually fed. Our team is well-equipped to care for your little ones.",
      },
    ],
  },
};

export const youngstersMinistryData = {
  meta: {
    className: "youngsters_ministry_page",
  },
  hero: {
    icon: RiEmotionHappyLine,
    title: "Youngsters Ministry (KYC)",
    image: GRWC3,
    imageAlt: "Youngsters",
    faqLink: "#youngsters_faqs",
    className: "youngsters_hero_icon",
  },
  subHero: {
    titleTop: "Youngsters at Gospel Revival Wave Church",
    title: "Raising the next generation of leaders",
    className: "youngsters_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "The Kingdom Youth Club (KYC) is a vibrant community for teenagers and young adults. We exist to empower young people to live bold, authentic lives for Christ in a changing world.",
      "Through dynamic youth services, mentorship programs, and social events, we provide a space where young people can ask questions, build friendships, and discover their God-given purpose.",
    ],
    images: [GRWC3, GRWC3],
    className: "youngsters_activities",
  },
  faq: {
    id: "youngsters_faqs",
    questions: [
      {
        question: "Who can join the Youngsters Ministry?",
        answer:
          "Our ministry is open to all teenagers and young adults, typically ages 13-22.",
      },
      {
        question: "When do you meet?",
        answer:
          "We have our main youth service every Sunday from 8:00 am - 11:30 am",
      },
      {
        question: "Are there opportunities to serve?",
        answer:
          "Absolutely! We encourage our youth to serve in various capacities, including the worship team, ushering, Bible study, prayers, seat ministry, creative arts and dancing.",
      },
      {
        question: "Do you organize camps or retreats?",
        answer:
          "Yes, we organize annual youth camps and retreats which are a highlight for many. It's a time of intense fun, fellowship, and spiritual renewal.",
      },
      {
        question: "How can I get connected?",
        answer:
          "Just show up to one of our services! You can also follow us on social media to stay updated on upcoming events.",
      },
    ],
  },
};

export const choirMinistryData = {
  meta: {
    className: "choir_ministry_page",
  },
  hero: {
    icon: RiMusic2Line,
    title: "Revival Wave Sounds",
    image: ChoirImage,
    imageAlt: "GRWC Choir",
    faqLink: "#choir_faqs",
    className: "choir_hero_icon",
  },
  subHero: {
    titleTop: "Choir Ministry at Gospel Revival Wave Church",
    title: "Leading the congregation in spirit and truth",
    className: "choir_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "The GRWC Choir is dedicated to leading the church in powerful, Spirit-filled worship. We believe that music is a tool to usher in the presence of God and prepare hearts for His Word.",
      "We are a family of worshippers who not only sing together but pray and grow together. We minister through various genres of gospel music, always aiming for excellence and anointing.",
    ],
    images: [ChoirImage, GRWC3],
    className: "choir_activities",
  },
  faq: {
    id: "choir_faqs",
    questions: [
      {
        question: "How can I join the choir?",
        answer:
          "We hold auditions periodically. If you have a passion for singing and a heart for worship, please speak to the music director after the service.",
      },
      {
        question: "Do I need professional training to join?",
        answer:
          "While musical skill is helpful, a teachable spirit and a commitment to grow are most important. We provide training and rehearsals to help you improve.",
      },
      {
        question: "When are rehearsals?",
        answer:
          "We typically rehearse on Saturday afternoons. We can have rehearsals during the week  if needed.",
      },
      {
        question: "Is there an age limit?",
        answer:
          "The main choir is generally for adults but we also have opportunities for youngsters (Sounds of Revival and Springs of Revival) and the youth (Voices of Revival).",
      },
      {
        question: "Do you sing only on Sundays?",
        answer:
          "We minister every Sunday, but we are also involved in special events, conferences, and occasionally minister at other churches.",
      },
    ],
  },
};
