import {
  RiBox3Line,
  RiWomenLine,
  RiParentLine,
  RiEmotionHappyLine,
  RiMusic2Line,
  RiFireLine,
  RiBookOpenLine,
  RiCrossLine,
  RiUserStarLine,
  RiShieldCheckLine,
  RiHandHeartLine,
  RiServiceLine,
  RiGiftLine,
  RiHeartPulseLine,
  RiHandSanitizerLine,
  RiBookShelfLine,
  RiHomeSmileLine,
} from "@remixicon/react";

import BishopPreaching from "../../assets/Images/AboutImages/BishopPreaching.webp";
import GRWC3 from "../../assets/Images/GRWC/GRWC3.webp";
import ChoirImage from "../../assets/Images/HomeImages/Choir.webp";
import SundaySchool3 from "../../assets/Images/HomeImages/SundaySchool3.webp";

// ====================== OFFICIAL MINISTRIES FROM GRWC 30TH ANNIVERSARY REPORT ======================

export const mensMinistryData = {
  meta: { className: "mens_ministry_page" },
  hero: {
    icon: RiBox3Line,
    title: "Revival Wave Men of Value",
    image: BishopPreaching,
    imageAlt: "Revival Wave Men of Value",
    faqLink: "#mens_faqs",
    className: "mens_hero_icon",
  },
  subHero: {
    titleTop: "men's ministry at Gospel Revival Wave Church",
    title: "Consecrated men of valor, prayer warriors, evangelists and leaders",
    className: "mens_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We are men of valor who serve in intercession, praise & worship, evangelism, discipleship and leadership. We create spaces for men to grow spiritually, use their gifts for God’s glory, and stand as strong pillars in their families and the church.",
      "Through fellowships, retreats, and service, we equip men to be faithful, bold, and impactful in every sphere of life.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "men_activities",
  },
  faq: {
    id: "mens_faqs",
    questions: [
      {
        question: "Who can join the Revival Wave Men of Value?",
        answer:
          "All men in the church — young and old — who desire to grow in faith, prayer, and leadership.",
      },
      {
        question: "How do I get involved?",
        answer:
          "Attend our monthly men’s fellowship or speak to any leader after service.",
      },
      {
        question: "What activities do you organise?",
        answer:
          "Prayer nights, retreats, evangelistic outreaches, leadership training, and family-strengthening events.",
      },
    ],
  },
};

export const womenMinistryData = {
  meta: { className: "women_ministry_page" },
  hero: {
    icon: RiWomenLine,
    title: "Revival Wave Queens",
    image: BishopPreaching,
    imageAlt: "Revival Wave Queens",
    faqLink: "#women_faqs",
    className: "women_hero_icon",
  },
  subHero: {
    titleTop: "women's ministry at Gospel Revival Wave Church",
    title: "Prayer, counselling, intercession and family transformation",
    className: "women_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "Led by Rev. Rose Muthanje Ireri (Chairlady of Kasarani Pastors’ Wives Fellowship), we focus on prayer, intercession, counselling, and empowering women to be strong pillars in their homes and the church.",
      "We organise women’s fellowships, retreats, counselling sessions, and community outreach.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "women_activities",
  },
  faq: {
    id: "women_faqs",
    questions: [
      {
        question: "Who can join the Revival Wave Queens?",
        answer: "All women — single, married, young and mature.",
      },
      {
        question: "What support do you offer?",
        answer:
          "Biblical counselling, prayer covering, marriage enrichment, and mentorship.",
      },
    ],
  },
};

export const sundaySchoolMinistryData = {
  meta: { className: "sundayschool_ministry_page" },
  hero: {
    icon: RiParentLine,
    title: "Revival Wave Eagles",
    image: SundaySchool3,
    imageAlt: "Revival Wave Eagles",
    faqLink: "#sundayschool_faqs",
    className: "sundayschool_hero_icon",
  },
  subHero: {
    titleTop: "Sunday School at Gospel Revival Wave Church",
    title: "Raising children who know, love and serve Jesus",
    className: "sundayschool_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We have over 400 children organised into four age-based levels (3–5, 6–7, 8–9, 10–12). Our ministry focuses on Bible teaching, worship, memory verses, leadership development and character building.",
      "We partner with parents to raise a godly generation. Many former Eagles are now youth leaders, ushers and ministers in the church.",
    ],
    images: [SundaySchool3, SundaySchool3],
    className: "sundayschool_activities",
  },
  faq: {
    id: "sundayschool_faqs",
    questions: [
      {
        question: "What ages are served in Revival Wave Eagles?",
        answer: "Children from 3 to 12 years old (4 age-based levels).",
      },
      {
        question: "When does Sunday School run?",
        answer: "During the main Sunday service.",
      },
    ],
  },
};

export const youngstersMinistryData = {
  meta: { className: "youngsters_ministry_page" },
  hero: {
    icon: RiEmotionHappyLine,
    title: "Kasarani Youngsters Church (KYC)",
    image: GRWC3,
    imageAlt: "Kasarani Youngsters Church",
    faqLink: "#youngsters_faqs",
    className: "youngsters_hero_icon",
  },
  subHero: {
    titleTop: "youngsters ministry at Gospel Revival Wave Church",
    title: "Raising bold, consecrated young people of faith",
    className: "youngsters_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We serve over 150 teens and young people. Our focus is to raise bold, consecrated young believers who walk in faith, purpose, and spiritual authority.",
      "Through dynamic services, mentorship, worship, evangelism and leadership training, we prepare the next generation to carry the Revival Wave.",
    ],
    images: [GRWC3, GRWC3],
    className: "youngsters_activities",
  },
  faq: {
    id: "youngsters_faqs",
    questions: [
      {
        question: "Who can join KYC?",
        answer: "All teenagers and young adults (typically 13–25 years).",
      },
      {
        question: "When do you meet?",
        answer:
          "Every Sunday during the main service and at special youth fellowships.",
      },
    ],
  },
};

export const musicMinistryData = {
  meta: { className: "music_ministry_page" },
  hero: {
    icon: RiMusic2Line,
    title: "Revival Wave Music Ministry",
    image: ChoirImage,
    imageAlt: "Revival Wave Music Ministry",
    faqLink: "#music_faqs",
    className: "music_hero_icon",
  },
  subHero: {
    titleTop: "music ministry at Gospel Revival Wave Church",
    title: "Leading the church in powerful, Spirit-filled worship",
    className: "music_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We have three vibrant worship teams that minister every Sunday and at special events:",
      "1. Revival Wave Voices — the main adult choir of the church.",
      "2. Vessels of Revival — they primarily minister in the first service and during church events.",
      "3. Sounds of Revival — the choir for the Kasarani Youngsters Church (KYC).",
      "Our teams also serve in interdenominational meetings and conferences.",
    ],
    images: [ChoirImage, GRWC3],
    className: "music_activities",
  },
  faq: {
    id: "music_faqs",
    questions: [
      {
        question: "How can I join the Music Ministry?",
        answer:
          "Attend one of our rehearsals or speak to the Music Director after any service.",
      },
      {
        question: "Do I need professional training?",
        answer:
          "A heart for worship and a teachable spirit are most important.",
      },
    ],
  },
};

// ====================== MISSING DEPARTMENTS (from PDF page 4) ======================

export const youthFellowshipMinistryData = {
  meta: { className: "youth_ministry_page" },
  hero: {
    icon: RiFireLine,
    title: "Youth Fellowship",
    image: GRWC3,
    imageAlt: "Youth Fellowship",
    faqLink: "#youth_faqs",
    className: "youth_hero_icon",
  },
  subHero: {
    titleTop: "youth fellowship at Gospel Revival Wave Church",
    title: "Raising young people in the fire of the Holy Spirit",
    className: "youth_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We provide a dynamic space for young adults to grow in faith, fellowship, worship and service.",
      "Our programmes include Bible study, prayer, evangelism training and leadership development.",
    ],
    images: [GRWC3, GRWC3],
    className: "youth_activities",
  },
  faq: {
    id: "youth_faqs",
    questions: [
      {
        question: "Who can join Youth Fellowship?",
        answer: "Young adults and youth who want to grow deeper in Christ.",
      },
      {
        question: "When do you meet?",
        answer: "Weekly fellowships and special youth services.",
      },
    ],
  },
};

export const evangelismMinistryData = {
  meta: { className: "evangelism_ministry_page" },
  hero: {
    icon: RiFireLine,
    title: "Evangelism Department",
    image: BishopPreaching,
    imageAlt: "Evangelism",
    faqLink: "#evangelism_faqs",
    className: "evangelism_hero_icon",
  },
  subHero: {
    titleTop: "evangelism at Gospel Revival Wave Church",
    title: "Preaching JESUS CHRIST the Desire of All Nations",
    className: "evangelism_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We take the Gospel to the streets, homes, schools and marketplaces through house-to-house evangelism, crusades, keshas and open-air meetings.",
      "We also support our 30 branches in evangelistic missions across Kenya.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "evangelism_activities",
  },
  faq: {
    id: "evangelism_faqs",
    questions: [
      {
        question: "How can I join the Evangelism team?",
        answer:
          "Attend our evangelism training or speak to the coordinator after service.",
      },
      {
        question: "Do you organise crusades?",
        answer: "Yes. We hold regular crusades and outreach programmes.",
      },
    ],
  },
};

export const discipleshipMinistryData = {
  meta: { className: "discipleship_ministry_page" },
  hero: {
    icon: RiBookOpenLine,
    title: "Discipleship Department",
    image: BishopPreaching,
    imageAlt: "Discipleship",
    faqLink: "#discipleship_faqs",
    className: "discipleship_hero_icon",
  },
  subHero: {
    titleTop: "discipleship at Gospel Revival Wave Church",
    title: "Raising mature followers of Jesus Christ",
    className: "discipleship_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We systematically disciple new converts and existing members through classes, mentorship, and follow-up systems.",
      "Our goal is to produce strong, fruitful Christians who can disciple others.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "discipleship_activities",
  },
  faq: {
    id: "discipleship_faqs",
    questions: [
      {
        question: "What is the discipleship process?",
        answer:
          "New believers go through foundational classes followed by ongoing mentorship.",
      },
    ],
  },
};

export const intercessionMinistryData = {
  meta: { className: "intercession_ministry_page" },
  hero: {
    icon: RiCrossLine,
    title: "Intercession Department",
    image: BishopPreaching,
    imageAlt: "Intercession",
    faqLink: "#intercession_faqs",
    className: "intercession_hero_icon",
  },
  subHero: {
    titleTop: "intercession at Gospel Revival Wave Church",
    title: "Standing in the gap through prayer",
    className: "intercession_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We labour in prayer for the church, the nation, Kasarani, and the fulfilment of the Revival Wave vision.",
      "We hold regular prayer meetings, keshas, and solemn assemblies.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "intercession_activities",
  },
  faq: {
    id: "intercession_faqs",
    questions: [
      {
        question: "When do you meet for prayer?",
        answer:
          "We have weekly intercession meetings and monthly all-night prayer (kesha).",
      },
      {
        question: "Can anyone join?",
        answer: "Yes. Anyone with a heart for prayer is welcome.",
      },
    ],
  },
};

export const usheringMinistryData = {
  meta: { className: "ushering_ministry_page" },
  hero: {
    icon: RiUserStarLine,
    title: "Ushering Department",
    image: BishopPreaching,
    imageAlt: "Ushers",
    faqLink: "#ushering_faqs",
    className: "ushering_hero_icon",
  },
  subHero: {
    titleTop: "ushering at Gospel Revival Wave Church",
    title: "Creating order and a welcoming atmosphere",
    className: "ushering_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We ensure smooth flow of service, seat guests, maintain order, and create a warm, reverent atmosphere in the house of God.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "ushering_activities",
  },
  faq: {
    id: "ushering_faqs",
    questions: [
      {
        question: "How do I become an usher?",
        answer: "Speak to the Head Usher after any service.",
      },
    ],
  },
};

export const securityMinistryData = {
  meta: { className: "security_ministry_page" },
  hero: {
    icon: RiShieldCheckLine,
    title: "Security Department",
    image: BishopPreaching,
    imageAlt: "Security",
    faqLink: "#security_faqs",
    className: "security_hero_icon",
  },
  subHero: {
    titleTop: "security at Gospel Revival Wave Church",
    title: "Protecting the house of God with excellence",
    className: "security_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We provide safety and order during all services, events and church activities.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "security_activities",
  },
  faq: {
    id: "security_faqs",
    questions: [
      {
        question: "Is prior experience required?",
        answer: "No. We train all volunteers.",
      },
    ],
  },
};

export const protocolMinistryData = {
  meta: { className: "protocol_ministry_page" },
  hero: {
    icon: RiHandHeartLine,
    title: "Protocol Department",
    image: BishopPreaching,
    imageAlt: "Protocol",
    faqLink: "#protocol_faqs",
    className: "protocol_hero_icon",
  },
  subHero: {
    titleTop: "protocol at Gospel Revival Wave Church",
    title: "Serving with honour and excellence",
    className: "protocol_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We coordinate VIPs, special guests, and ensure smooth protocol during services and events.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "protocol_activities",
  },
  faq: {
    id: "protocol_faqs",
    questions: [
      {
        question: "How can I join Protocol?",
        answer: "Speak to the Protocol Coordinator after service.",
      },
    ],
  },
};

export const hospitalityMinistryData = {
  meta: { className: "hospitality_ministry_page" },
  hero: {
    icon: RiServiceLine,
    title: "Hospitality Department",
    image: BishopPreaching,
    imageAlt: "Hospitality",
    faqLink: "#hospitality_faqs",
    className: "hospitality_hero_icon",
  },
  subHero: {
    titleTop: "hospitality at Gospel Revival Wave Church",
    title: "Extending the love of Christ to every guest",
    className: "hospitality_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We welcome visitors, serve refreshments, and create a family atmosphere for everyone who walks through our doors.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "hospitality_activities",
  },
  faq: {
    id: "hospitality_faqs",
    questions: [
      {
        question: "How can I serve in Hospitality?",
        answer: "Speak to the Hospitality Coordinator.",
      },
    ],
  },
};

export const greetersMinistryData = {
  meta: { className: "greeters_ministry_page" },
  hero: {
    icon: RiGiftLine,
    title: "Greeters Ministry",
    image: BishopPreaching,
    imageAlt: "Greeters",
    faqLink: "#greeters_faqs",
    className: "greeters_hero_icon",
  },
  subHero: {
    titleTop: "greeters at Gospel Revival Wave Church",
    title: "The first smile every visitor meets",
    className: "greeters_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We welcome every person at the entrance with warmth and direct them to their seats or ministries.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "greeters_activities",
  },
  faq: {
    id: "greeters_faqs",
    questions: [
      {
        question: "How can I become a Greeter?",
        answer: "Speak to the Head Greeter after service.",
      },
    ],
  },
};

export const welfareMinistryData = {
  meta: { className: "welfare_ministry_page" },
  hero: {
    icon: RiHeartPulseLine,
    title: "Welfare Department",
    image: BishopPreaching,
    imageAlt: "Welfare",
    faqLink: "#welfare_faqs",
    className: "welfare_hero_icon",
  },
  subHero: {
    titleTop: "welfare at Gospel Revival Wave Church",
    title: "Caring for the practical needs of the family",
    className: "welfare_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We support members in need with food, medical assistance, counselling referrals and practical help.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "welfare_activities",
  },
  faq: {
    id: "welfare_faqs",
    questions: [
      {
        question: "Who can receive welfare support?",
        answer: "Any member in genuine need.",
      },
    ],
  },
};

export const cleaningBeautificationMinistryData = {
  meta: { className: "cleaning_ministry_page" },
  hero: {
    icon: RiHandSanitizerLine,
    title: "Cleaning & Beautification",
    image: BishopPreaching,
    imageAlt: "Cleaning & Beautification",
    faqLink: "#cleaning_faqs",
    className: "cleaning_hero_icon",
  },
  subHero: {
    titleTop: "cleaning & beautification at Gospel Revival Wave Church",
    title: "Keeping God's house beautiful and clean",
    className: "cleaning_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We maintain the church premises, clean, decorate and ensure the sanctuary is always ready for worship.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "cleaning_activities",
  },
  faq: {
    id: "cleaning_faqs",
    questions: [
      {
        question: "How can I serve in this department?",
        answer: "Join our cleaning team on designated days.",
      },
    ],
  },
};

export const bookshopLibraryMinistryData = {
  meta: { className: "bookshop_ministry_page" },
  hero: {
    icon: RiBookShelfLine,
    title: "Bookshop & Library",
    image: BishopPreaching,
    imageAlt: "Bookshop & Library",
    faqLink: "#bookshop_faqs",
    className: "bookshop_hero_icon",
  },
  subHero: {
    titleTop: "bookshop & library at Gospel Revival Wave Church",
    title: "Equipping believers with life-changing resources",
    className: "bookshop_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We sell and lend anointed books, Bibles, teaching materials and resources that support spiritual growth.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "bookshop_activities",
  },
  faq: {
    id: "bookshop_faqs",
    questions: [
      {
        question: "Can I borrow books?",
        answer: "Yes. Our library is open to all members.",
      },
    ],
  },
};

export const homeCellFellowshipsMinistryData = {
  meta: { className: "homecell_ministry_page" },
  hero: {
    icon: RiHomeSmileLine,
    title: "Home Cell Fellowships",
    image: BishopPreaching,
    imageAlt: "Home Cell Fellowships",
    faqLink: "#homecell_faqs",
    className: "homecell_hero_icon",
  },
  subHero: {
    titleTop: "home cell fellowships at Gospel Revival Wave Church",
    title: "The church that meets in homes",
    className: "homecell_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "We meet in small groups in homes for fellowship, Bible study, prayer, worship and mutual care.",
      "Home cells are the heartbeat of our church family.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "homecell_activities",
  },
  faq: {
    id: "homecell_faqs",
    questions: [
      {
        question: "How do I join a Home Cell?",
        answer: "Speak to any pastor or cell leader after service.",
      },
      {
        question: "Where are the cells located?",
        answer: "In various estates around Kasarani and beyond.",
      },
    ],
  },
};
