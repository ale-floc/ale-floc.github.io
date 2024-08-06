/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 456:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(961);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(7075);
// EXTERNAL MODULE: ./node_modules/react-scroll/modules/index.js
var modules = __webpack_require__(6848);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UpOutlined.js + 1 modules
var UpOutlined = __webpack_require__(3853);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(9827);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.es.js
var free_brands_svg_icons_index_es = __webpack_require__(2403);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js
var free_regular_svg_icons_index_es = __webpack_require__(9075);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/footer/styles.scss
var styles = __webpack_require__(7963);
;// CONCATENATED MODULE: ./src/components/footer/styles.scss

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);



/* harmony default export */ const footer_styles = (styles/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/components/footer/index.js







var Footer = function Footer() {
  return /*#__PURE__*/react.createElement("footer", null, /*#__PURE__*/react.createElement("div", {
    className: "scroll-top",
    onClick: function onClick() {
      return modules/* animateScroll */.Nk.scrollToTop();
    }
  }, /*#__PURE__*/react.createElement(UpOutlined/* default */.A, null)), /*#__PURE__*/react.createElement("div", {
    className: "wrapper-footer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "icon-footer"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://www.linkedin.com/in/arnaud-le-floch-6849a3a7/",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.g, {
    icon: free_brands_svg_icons_index_es/* faLinkedin */.IAJ
  })), /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/ale-floc",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.g, {
    icon: free_brands_svg_icons_index_es/* faGithub */.Vz1
  })), /*#__PURE__*/react.createElement("a", {
    href: "mailto:a.lefloch2491@gmail.com"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.g, {
    icon: free_regular_svg_icons_index_es/* faEnvelope */.y_
  }))), /*#__PURE__*/react.createElement("div", {
    className: "copyright"
  }, "ARNAUD LE FLOCH \xA9 ", new Date().getFullYear())));
};
/* harmony default export */ const footer = (Footer);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(4103);
;// CONCATENATED MODULE: ./src/assets/lang.json
const lang_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"banner":"I\'m Arnaud Le Floch.","description":"Full Stack Developer","home":"Home","about":"About","contact":"Contact","resume":"My resume","skills":"Skills","experience":"Experience","name":"Firstname & Lastname","mail":"Email","message":"Message","others":"Others","tools":"Tools","development":"Development","hello":"Hello !","aboutText":["Passionate about the world of computer science since the age of 11, I made it my profession in 2014 by becoming a developer through the school 42. I have gained strong skills in development, particularly in web development, which is the field I specialize in.","Being autonomous and self-taught, I am always eager to learn, whether it\'s professionally or passionately about various subjects.","You can find my skills and experiences, and I hope you find my profile interesting. Please feel free to contact me for more information.","I am available and ready to answer your questions."],"company":["I attended School 42 in August 2014, there I learned the basics of programming with the C language and the use of git. After that I started web development and gained skills in CSS, JS, JQUERY, PHP, MYSQL, NodeJS and Ruby on rails using them in many projects.","Geekzie was my first year internship lasting 4 months as a full-stack Ruby on rails developer, I had to realize multiple features, from the payment method to the automatic management of a calendar through a lot of code refactoring and a fully responsive website realization.","I held the position of Full Stack JavaScript Developer at Redpelicans, an IT consulting firm. I underwent training on the MERN stack (MongoDB, Express.js, React.js, Node.js) as well as best practices in JavaScript development. Following my training, I was assigned to a project within a company.","Europ-assistance was my mission for Redpelicans, we had to manage a WebApp in NodeJS & ReactJS that allows you to call an assistance service in case of problem on the road with your vehicle, the web-app is used by many countries and is customizable according to the demand of the country.","La Route des Golfs was the company I worked for as a Full Stack developer, utilizing Next.js and Laravel. It was a marketplace website dedicated to golf, designed in collaboration with regional tourism committees representing various regions, with a focus on the golf industry."]},"fr":{"banner":"Je suis Arnaud Le Floch.","description":"Développeur Full Stack","home":"Accueil","about":"À propos","contact":"Contact","resume":"Mon CV","skills":"Compétences","experience":"Expérience","name":"Nom & Prénom","mail":"Adresse e-mail","message":"Message","others":"Autres","tools":"Outils","development":"Développement","hello":"Bonjour !","aboutText":["Je suis passionné par l\'informatique depuis l\'âge de 11 ans et j\'ai choisi d\'en faire ma carrière en devenant développeur en 2014 grâce à l\'école 42. J\'ai développé de solides compétences en programmation, en particulier dans le domaine du développement web, où je me suis spécialisé.","Je suis quelqu\'un d\'autonome et d\'autodidacte, toujours avide d\'apprendre, que ce soit dans un contexte professionnel ou par pur intérêt personnel sur des sujets variés.","Vous pouvez consulter mes compétences et mes expériences pour en savoir plus sur mon profil. J\'espère que vous trouverez mon parcours intéressant. N\'hésitez pas à me contacter si vous souhaitez obtenir plus d\'informations.","Je suis disponible et prêt à répondre à vos questions."],"company":["J\'ai participé à l\'école 42 en août 2014, j\'y ai appris la base de la programmation avec le langage C et l\'utilisation de git. Par la suite j\'ai commencé le développement web et j\'ai acquis des compétences en CSS, JS, JQUERY, PHP, MYSQL, NodeJS et Ruby on rails en les utilisant dans de nombreux projets.","Geekzie fut mon stage de première année d\'une durée de 4 mois en tant que développeur full-stack Ruby on rails, j\'ai dû réaliser de multiples fonctionnalités, de la méthode de paiement à la gestion automatique d\'un agenda en passant par beaucoup de refactoring de code et une réalisation du site web entièrement responsive.","J\'ai occupé le poste de développeur Full Stack Javascript chez Redpelicans, une SSII. J\'ai suivi une formation sur la stack MERN (MongoDB, Express.js, React.js, Node.js) ainsi que sur les meilleures pratiques de développement en JavaScript. Après ma formation, j\'ai été affecté à un projet au sein d\'une entreprise.","La société Europ-assistance a été ma mission pour Redpelicans, nous devions gérer une WebApp en NodeJS & ReactJS qui permet de faire appel à un service d\'assistance en cas de problème sur la route avec votre véhicule, la web-app est utilisé par de nombreux pays et est personnalisable en fonction de la demande du pays.","La Route des Golfs était l\'entreprise pour laquelle j\'ai travaillé en tant que développeur Full Stack, utilisant Next.js, Laravel. Il s\'agis d\'un site de type marketplace pour le golf, conçu en collaboration avec les comités régionaux de tourisme, représentant différentes régions, et axé sur l\'industrie du golf."]}}');
// EXTERNAL MODULE: ./node_modules/react-svg/dist/react-svg.esm.js + 4 modules
var react_svg_esm = __webpack_require__(1366);
;// CONCATENATED MODULE: ./src/assets/img/earth.svg
/* harmony default export */ const earth = (__webpack_require__.p + "af46b8db4b2af2d9c0bc11229f86210b.svg");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/earth/styles.scss
var earth_styles = __webpack_require__(8240);
;// CONCATENATED MODULE: ./src/components/earth/styles.scss

            

var styles_options = {};

styles_options.insert = "head";
styles_options.singleton = false;

var styles_update = injectStylesIntoStyleTag_default()(earth_styles/* default */.A, styles_options);



/* harmony default export */ const components_earth_styles = (earth_styles/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/components/earth/index.js





var Earth = function Earth() {
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    scroll = _useState2[0],
    setScroll = _useState2[1];
  (0,react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      return setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);
  return scroll < 450 && /*#__PURE__*/react.createElement("div", {
    className: "container-earth",
    style: {
      transform: "translateY(calc(100px + ".concat(scroll * 2, "px))")
    }
  }, /*#__PURE__*/react.createElement(react_svg_esm/* ReactSVG */.k, {
    className: "earth",
    src: earth
  }));
};
/* harmony default export */ const components_earth = (Earth);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/home/styles.scss
var home_styles = __webpack_require__(3271);
;// CONCATENATED MODULE: ./src/components/home/styles.scss

            

var home_styles_options = {};

home_styles_options.insert = "head";
home_styles_options.singleton = false;

var home_styles_update = injectStylesIntoStyleTag_default()(home_styles/* default */.A, home_styles_options);



/* harmony default export */ const components_home_styles = (home_styles/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/components/home/index.js







var Home = function Home() {
  var _useContext = (0,react.useContext)(LanguageContext),
    language = _useContext.language;
  return /*#__PURE__*/react.createElement("div", {
    id: "home",
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/react.createElement("h1", null, lang_namespaceObject[language].banner), /*#__PURE__*/react.createElement("h3", null, lang_namespaceObject[language].description)), /*#__PURE__*/react.createElement("a", {
    href: "https://drive.google.com/file/d/1RqnpwErEmyJVvYb231diwjF9yU2CO9LS/view?usp=sharing",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("input", {
    type: "button",
    value: lang_namespaceObject[language].resume
  })), /*#__PURE__*/react.createElement(components_earth, null), /*#__PURE__*/react.createElement(modules/* Link */.N_, {
    activeClass: "active",
    to: "about",
    spy: true,
    smooth: true,
    duration: 1000
  }, /*#__PURE__*/react.createElement("div", {
    className: "scroll-down",
    onClick: function onClick() {
      return modules/* animateScroll */.Nk.scrollToTop();
    }
  }, /*#__PURE__*/react.createElement(DownOutlined/* default */.A, null))));
};
/* harmony default export */ const home = (Home);
;// CONCATENATED MODULE: ./src/assets/img/skills/css.svg
/* harmony default export */ const css = (__webpack_require__.p + "dbd31fe14ec796185689723739441965.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/javascript.svg
/* harmony default export */ const javascript = (__webpack_require__.p + "a47f93fdcc22b543fc559b7d90718c17.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/html.svg
/* harmony default export */ const html = (__webpack_require__.p + "87f3f64abde68319b96661c04229b687.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/react.svg
/* harmony default export */ const skills_react = (__webpack_require__.p + "fde0e883d98936b0d4d30191d5511c54.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/sass.svg
/* harmony default export */ const sass = (__webpack_require__.p + "8aa78a8393470431c8036541f0708bd7.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/nodejs.svg
/* harmony default export */ const nodejs = (__webpack_require__.p + "767ca0049d59c5c9cc31cf80bbbbaf83.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/bootstrap.svg
/* harmony default export */ const bootstrap = (__webpack_require__.p + "48565baa4c3a44417a6798093c5a85e7.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/jquery.svg
/* harmony default export */ const jquery = (__webpack_require__.p + "2296e3349b39ea44c465af798d8f7137.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/mongodb.svg
/* harmony default export */ const mongodb = (__webpack_require__.p + "8a16cb351e37af88ded7faadda8bedcc.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/materialui.svg
/* harmony default export */ const materialui = (__webpack_require__.p + "2779152dbb5af4e7eaf58e5cdcf5f441.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/antd.svg
/* harmony default export */ const antd = (__webpack_require__.p + "51586d6b98032197691d127435162092.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/mysql.svg
/* harmony default export */ const mysql = (__webpack_require__.p + "2e218a79f337fbe1366391b1dbd2fc47.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/visualStudioCode.svg
/* harmony default export */ const visualStudioCode = (__webpack_require__.p + "a4b8e5c0551f3ad73ecb8c1e4f87afe0.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/iterm.svg
/* harmony default export */ const iterm = (__webpack_require__.p + "1c95c59f77de3f9d797d5f181a4f84ec.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/docker.svg
/* harmony default export */ const docker = (__webpack_require__.p + "3253a6fe64f326e90f1716b7069eeeb8.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/ansible.svg
/* harmony default export */ const ansible = (__webpack_require__.p + "ff88f303f88ee9a9fbe1ca765f1e0652.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/terraform.svg
/* harmony default export */ const terraform = (__webpack_require__.p + "d3c9c26a286d3423339e6fb287ba45b5.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/postman.svg
/* harmony default export */ const postman = (__webpack_require__.p + "4be3b073ce3395f4658a5d881a2c3523.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/git.svg
/* harmony default export */ const git = (__webpack_require__.p + "4a68cd6445bc9da39ec3dbd3fe4ba27b.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/premierePro.svg
/* harmony default export */ const premierePro = (__webpack_require__.p + "e1bb972afdf57e4666dd3bf1af06b83a.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/afterEffect.svg
/* harmony default export */ const afterEffect = (__webpack_require__.p + "0e3187311c745800eb01ecf906c7958f.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/illustrator.svg
/* harmony default export */ const illustrator = (__webpack_require__.p + "a546955fcf0a25d966618958c27022a4.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/photoshop.svg
/* harmony default export */ const photoshop = (__webpack_require__.p + "60eda61e3cfe863729f83f2f106c1223.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/webpack.svg
/* harmony default export */ const webpack = (__webpack_require__.p + "23fc1d3ac606d117e05a140e0de79806.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/ec2.svg
/* harmony default export */ const ec2 = (__webpack_require__.p + "7169c405c54618d048ae7c5b6cdb8064.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/s3.svg
/* harmony default export */ const s3 = (__webpack_require__.p + "1bd16ba05c1328745865c90794be10e3.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/nextjs.svg
/* harmony default export */ const nextjs = (__webpack_require__.p + "e3c042b9d9d809ebb67e9bc6e1e5f70d.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/tailwind.svg
/* harmony default export */ const tailwind = (__webpack_require__.p + "03fdecbfd26561a058e76b84d95184a7.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/python.svg
/* harmony default export */ const python = (__webpack_require__.p + "b7dca7431ec705868eb4af0c7a3af670.svg");
;// CONCATENATED MODULE: ./src/assets/img/skills/chatgpt.svg
/* harmony default export */ const chatgpt = (__webpack_require__.p + "3b5c33ced492e260ed7825b9fb45de5e.svg");
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(4980);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-intersection-observer/react-intersection-observer.m.js
var react_intersection_observer_m = __webpack_require__(1742);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/title/styles.scss
var title_styles = __webpack_require__(4718);
;// CONCATENATED MODULE: ./src/components/title/styles.scss

            

var title_styles_options = {};

title_styles_options.insert = "head";
title_styles_options.singleton = false;

var title_styles_update = injectStylesIntoStyleTag_default()(title_styles/* default */.A, title_styles_options);



/* harmony default export */ const components_title_styles = (title_styles/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/components/title/index.js





var Title = function Title(_ref) {
  var title = _ref.title;
  var _useInView = (0,react_intersection_observer_m/* useInView */.Wx)({
      threshold: 1,
      rootMargin: '-150px 0px',
      triggerOnce: true
    }),
    ref = _useInView.ref,
    inView = _useInView.inView;
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: classnames_default()('observer', (0,defineProperty/* default */.A)({}, 'title-fade', inView))
  }, inView ? /*#__PURE__*/react.createElement("h2", {
    className: "title"
  }, title) : /*#__PURE__*/react.createElement("h2", {
    className: "title_hidden"
  }));
};
/* harmony default export */ const title = (Title);
;// CONCATENATED MODULE: ./src/components/skills/skillsItem.js

var SkillsItem = function SkillsItem(_ref) {
  var id = _ref.id,
    src = _ref.src,
    title = _ref.title;
  return /*#__PURE__*/react.createElement("div", {
    className: "skill-item"
  }, /*#__PURE__*/react.createElement("img", {
    id: id,
    src: src
  }), /*#__PURE__*/react.createElement("span", null, title));
};
/* harmony default export */ const skillsItem = (SkillsItem);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/skills/styles.scss
var skills_styles = __webpack_require__(5352);
;// CONCATENATED MODULE: ./src/components/skills/styles.scss

            

var skills_styles_options = {};

skills_styles_options.insert = "head";
skills_styles_options.singleton = false;

var skills_styles_update = injectStylesIntoStyleTag_default()(skills_styles/* default */.A, skills_styles_options);



/* harmony default export */ const components_skills_styles = (skills_styles/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/components/skills/index.js




































var Skills = function Skills() {
  var _useContext = (0,react.useContext)(LanguageContext),
    language = _useContext.language;
  return /*#__PURE__*/react.createElement("div", {
    id: "skills",
    className: "container"
  }, /*#__PURE__*/react.createElement(title, {
    title: lang_namespaceObject[language].skills
  }), /*#__PURE__*/react.createElement("div", {
    className: "container-skills"
  }, /*#__PURE__*/react.createElement("div", {
    className: "wrapper-skills"
  }, /*#__PURE__*/react.createElement("h2", null, lang_namespaceObject[language].development), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(skillsItem, {
    id: "html",
    src: html,
    title: "HTML 5"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "css",
    src: css,
    title: "CSS 3"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "javascript",
    src: javascript,
    title: "Javascript"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "jquery",
    src: jquery,
    title: "Jquery"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "react",
    src: skills_react,
    title: "ReactJS"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "nextjs",
    src: nextjs,
    title: "NextJS"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "nodejs",
    src: nodejs,
    title: "NodeJS"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "python",
    src: python,
    title: "Python"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "sass",
    src: sass,
    title: "Sass"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "mongodb",
    src: mongodb,
    title: "MongoDB"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "mysql",
    src: mysql,
    title: "MYSQL"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "tailwind",
    src: tailwind,
    title: "Tailwind"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "bootstrap",
    src: bootstrap,
    title: "Bootstrap"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "antd",
    src: antd,
    title: "Antd"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "materialui",
    src: materialui,
    title: "Material-UI"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "webpack",
    src: webpack,
    title: "Webpack"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "wrapper-skills"
  }, /*#__PURE__*/react.createElement("h2", null, lang_namespaceObject[language].tools), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(skillsItem, {
    id: "visualStudioCode",
    src: visualStudioCode,
    title: "VSCode"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "iterm",
    src: iterm,
    title: "Iterm 2"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "git",
    src: git,
    title: "Git"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "docker",
    src: docker,
    title: "Docker"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "ansible",
    src: ansible,
    title: "Ansible"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "terraform",
    src: terraform,
    title: "Terraform"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "postman",
    src: postman,
    title: "Postman"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "illustrator",
    src: illustrator,
    title: "Illustrator"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "photoshop",
    src: photoshop,
    title: "Photoshop"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "afterEffect",
    src: afterEffect,
    title: "After Effect"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "premierePro",
    src: premierePro,
    title: "Premiere Pro"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "ec2",
    src: ec2,
    title: "EC2"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "s3",
    src: s3,
    title: "S3"
  }), /*#__PURE__*/react.createElement(skillsItem, {
    id: "chatgpt",
    src: chatgpt,
    title: "ChatGPT"
  })))));
};
/* harmony default export */ const skills = (Skills);
;// CONCATENATED MODULE: ./src/assets/img/arnaud.png
/* harmony default export */ const arnaud = (__webpack_require__.p + "1f0607c4e7058aeb085fdb1b7827bab6.png");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/about/styles.scss
var about_styles = __webpack_require__(631);
;// CONCATENATED MODULE: ./src/components/about/styles.scss

            

var about_styles_options = {};

about_styles_options.insert = "head";
about_styles_options.singleton = false;

var about_styles_update = injectStylesIntoStyleTag_default()(about_styles/* default */.A, about_styles_options);



/* harmony default export */ const components_about_styles = (about_styles/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/components/about/index.js






var About = function About() {
  var _useContext = (0,react.useContext)(LanguageContext),
    language = _useContext.language;
  return /*#__PURE__*/react.createElement("div", {
    id: "about",
    className: "container"
  }, /*#__PURE__*/react.createElement(title, {
    title: lang_namespaceObject[language].about
  }), /*#__PURE__*/react.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react.createElement("img", {
    src: arnaud
  }), /*#__PURE__*/react.createElement("div", {
    className: "paragraphly"
  }, lang_namespaceObject[language].aboutText.map(function (text) {
    return /*#__PURE__*/react.createElement("h3", {
      key: text
    }, text);
  }))));
};
/* harmony default export */ const about = (About);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/experience/styles.scss
var experience_styles = __webpack_require__(3454);
;// CONCATENATED MODULE: ./src/components/experience/styles.scss

            

var experience_styles_options = {};

experience_styles_options.insert = "head";
experience_styles_options.singleton = false;

var experience_styles_update = injectStylesIntoStyleTag_default()(experience_styles/* default */.A, experience_styles_options);



/* harmony default export */ const components_experience_styles = (experience_styles/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/components/experience/index.js



var Experience = function Experience(_ref) {
  var id = _ref.id,
    img = _ref.img,
    year = _ref.year,
    description = _ref.description,
    reverse = _ref.reverse;
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, reverse && {
    id: 'reverse'
  }, {
    className: "experience"
  }), /*#__PURE__*/react.createElement("div", {
    className: "company"
  }, /*#__PURE__*/react.createElement("img", {
    id: id,
    src: img
  }), /*#__PURE__*/react.createElement("h3", null, year)), /*#__PURE__*/react.createElement("div", {
    className: "paragraphly"
  }, /*#__PURE__*/react.createElement("h3", null, description)));
};
/* harmony default export */ const experience = (Experience);
;// CONCATENATED MODULE: ./src/assets/img/42_logo.svg
/* harmony default export */ const _42_logo = (__webpack_require__.p + "7f3eab5ab4046071b6f0e411c993c6c7.svg");
;// CONCATENATED MODULE: ./src/assets/img/geekzie.svg
/* harmony default export */ const geekzie = (__webpack_require__.p + "ae440b9208d98e21f3190f7d3df186a8.svg");
;// CONCATENATED MODULE: ./src/assets/img/europ-assistance.png
/* harmony default export */ const europ_assistance = (__webpack_require__.p + "48296f17ddf945555a2e5630bc6642d7.png");
;// CONCATENATED MODULE: ./src/assets/img/redpelicans.png
/* harmony default export */ const redpelicans = (__webpack_require__.p + "446dcf19abcec82644e0b3cc97812a2b.png");
;// CONCATENATED MODULE: ./src/assets/img/lrdg.svg
/* harmony default export */ const lrdg = (__webpack_require__.p + "459ef83dd95d3f4f418f435832b6fe87.svg");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/experiences/styles.scss
var experiences_styles = __webpack_require__(2951);
;// CONCATENATED MODULE: ./src/components/experiences/styles.scss

            

var experiences_styles_options = {};

experiences_styles_options.insert = "head";
experiences_styles_options.singleton = false;

var experiences_styles_update = injectStylesIntoStyleTag_default()(experiences_styles/* default */.A, experiences_styles_options);



/* harmony default export */ const components_experiences_styles = (experiences_styles/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/components/experiences/index.js











var Experiences = function Experiences() {
  var _useContext = (0,react.useContext)(LanguageContext),
    language = _useContext.language;
  return /*#__PURE__*/react.createElement("div", {
    id: "experiences",
    className: "container"
  }, /*#__PURE__*/react.createElement(title, {
    title: lang_namespaceObject[language].experience
  }), /*#__PURE__*/react.createElement("div", {
    className: "wrapper-experiences"
  }, /*#__PURE__*/react.createElement(experience, {
    id: "lrdg",
    img: lrdg,
    year: "2022",
    description: lang_namespaceObject[language].company[4]
  }), /*#__PURE__*/react.createElement(experience, {
    reverse: true,
    id: "europAssistance",
    img: europ_assistance,
    year: "2018",
    description: lang_namespaceObject[language].company[3]
  }), /*#__PURE__*/react.createElement(experience, {
    id: "redpelicans",
    img: redpelicans,
    year: "2018",
    description: lang_namespaceObject[language].company[2]
  }), /*#__PURE__*/react.createElement(experience, {
    reverse: true,
    id: "geekzie",
    img: geekzie,
    year: "2017",
    description: lang_namespaceObject[language].company[1]
  }), /*#__PURE__*/react.createElement(experience, {
    id: "fortyTwo",
    img: _42_logo,
    year: "2014",
    description: lang_namespaceObject[language].company[0]
  })));
};
/* harmony default export */ const experiences = (Experiences);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MenuOutlined.js + 1 modules
var MenuOutlined = __webpack_require__(9197);
;// CONCATENATED MODULE: ./src/assets/img/english.svg
/* harmony default export */ const english = (__webpack_require__.p + "b66bbdae4e9a09e508e25313e0ffc86b.svg");
;// CONCATENATED MODULE: ./src/assets/img/french.svg
/* harmony default export */ const french = (__webpack_require__.p + "31c85019a986ff5ebab74a6994a01113.svg");
;// CONCATENATED MODULE: ./src/components/navbar/navButton.js




var NavButton = function NavButton(_ref) {
  var text = _ref.text,
    to = _ref.to,
    scroll = _ref.scroll,
    setActive = _ref.setActive;
  return /*#__PURE__*/react.createElement(modules/* Link */.N_, {
    activeClass: "active",
    to: to,
    spy: true,
    smooth: true,
    duration: 800,
    onClick: function onClick() {
      return setActive(false);
    }
  }, /*#__PURE__*/react.createElement("li", {
    className: classnames_default()((0,defineProperty/* default */.A)({}, 'nav-active', scroll))
  }, text));
};
/* harmony default export */ const navButton = (NavButton);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/styles.scss
var navbar_styles = __webpack_require__(4092);
;// CONCATENATED MODULE: ./src/components/navbar/styles.scss

            

var navbar_styles_options = {};

navbar_styles_options.insert = "head";
navbar_styles_options.singleton = false;

var navbar_styles_update = injectStylesIntoStyleTag_default()(navbar_styles/* default */.A, navbar_styles_options);



/* harmony default export */ const components_navbar_styles = (navbar_styles/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/components/navbar/index.js










var Navbar = function Navbar() {
  var _useContext = (0,react.useContext)(LanguageContext),
    language = _useContext.language,
    toggleLanguage = _useContext.toggleLanguage;
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    scroll = _useState2[0],
    setScroll = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    isActive = _useState4[0],
    setActive = _useState4[1];
  var changeFlag = function changeFlag() {
    return language === 'en' ? english : french;
  };
  (0,react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      return setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', function () {
      return setActive(false);
    });
  }, []);
  return /*#__PURE__*/react.createElement("nav", {
    className: classnames_default()({
      navBackground: scroll > 200
    })
  }, /*#__PURE__*/react.createElement("img", {
    className: "flag",
    src: changeFlag(),
    onClick: toggleLanguage
  }), /*#__PURE__*/react.createElement(MenuOutlined/* default */.A, {
    className: classnames_default()('menuResponsive', {
      toggleMenu: isActive
    }),
    onClick: function onClick() {
      return setActive(!isActive);
    }
  }), /*#__PURE__*/react.createElement("ul", {
    className: classnames_default()({
      toggleMenu: isActive
    })
  }, /*#__PURE__*/react.createElement(navButton, {
    text: lang_namespaceObject[language].home,
    to: "home",
    scroll: scroll <= 600,
    setActive: setActive
  }), /*#__PURE__*/react.createElement(navButton, {
    text: lang_namespaceObject[language].about,
    to: "about",
    scroll: scroll <= 1300 && scroll > 600,
    setActive: setActive
  }), /*#__PURE__*/react.createElement(navButton, {
    text: lang_namespaceObject[language].skills,
    to: "skills",
    scroll: scroll <= 2400 && scroll > 1300,
    setActive: setActive
  }), /*#__PURE__*/react.createElement(navButton, {
    text: lang_namespaceObject[language].experience,
    to: "experiences",
    scroll: scroll <= 3300 && scroll > 2400,
    setActive: setActive
  })));
};
/* harmony default export */ const navbar = (Navbar);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/app/styles.scss
var app_styles = __webpack_require__(113);
;// CONCATENATED MODULE: ./src/components/app/styles.scss

            

var app_styles_options = {};

app_styles_options.insert = "head";
app_styles_options.singleton = false;

var app_styles_update = injectStylesIntoStyleTag_default()(app_styles/* default */.A, app_styles_options);



/* harmony default export */ const components_app_styles = (app_styles/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/components/app/index.js









var LanguageContext = /*#__PURE__*/react.createContext();
var App = function App() {
  var _useState = (0,react.useState)('en'),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    language = _useState2[0],
    setLanguage = _useState2[1];
  var toggleLanguage = function toggleLanguage() {
    return setLanguage(function (l) {
      return l === 'en' ? 'fr' : 'en';
    });
  };
  (0,react.useEffect)(function () {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react.createElement(LanguageContext.Provider, {
    value: {
      language: language,
      toggleLanguage: toggleLanguage
    }
  }, /*#__PURE__*/react.createElement(navbar, null), /*#__PURE__*/react.createElement(home, null), /*#__PURE__*/react.createElement(about, null), /*#__PURE__*/react.createElement(skills, null), /*#__PURE__*/react.createElement(experiences, null), /*#__PURE__*/react.createElement(footer, null)));
};
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss
var main = __webpack_require__(5664);
;// CONCATENATED MODULE: ./src/styles/main.scss

            

var main_options = {};

main_options.insert = "head";
main_options.singleton = false;

var main_update = injectStylesIntoStyleTag_default()(main/* default */.A, main_options);



/* harmony default export */ const styles_main = (main/* default */.A.locals || {});
;// CONCATENATED MODULE: ./src/index.js




react_dom.render( /*#__PURE__*/react.createElement(app, null), document.getElementById('root'));

/***/ }),

/***/ 631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#about{background:radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%)}#about .wrapper{display:flex;justify-content:center;align-items:center;margin:75px 0px}@media only screen and (max-width: 1024px){#about .wrapper{flex-direction:column;margin-top:20px}}#about .wrapper img{width:300px;height:300px;margin:10px}@media only screen and (max-width: 1024px){#about .wrapper img{width:200px;height:auto;margin-top:20px}}@media only screen and (max-width: 600px){#about .wrapper img{width:150px;height:auto}}#about .wrapper .paragraphly{width:50%;font-family:\"Montserrat-Thin\";line-height:25px;font-size:.95rem;background:#242d38;padding:30px;margin:15px;letter-spacing:1px;border-radius:2px;box-shadow:10px 10px 5px #161f2b}@media only screen and (max-width: 1024px){#about .wrapper .paragraphly{line-height:20px;width:70%;font-size:.9rem}}@media only screen and (max-width: 600px){#about .wrapper .paragraphly{line-height:16px;width:85%;font-size:.8rem;padding:15px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App{height:100%;width:100%}.container{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;position:relative}@media only screen and (max-width: 600px){.container{height:auto;min-height:-webkit-fill-available}}.container .observer{opacity:0}.container:not(#home){flex-flow:column;justify-content:center}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8240:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container-earth{-webkit-animation:earth-appear-anim 1s;-moz-animation:earth-appear-anim 1s;-ms-animation:earth-appear-anim 1s;-o-animation:earth-appear-anim 1s;animation:earth-appear-anim 1s;width:100%;position:sticky;display:flex;justify-content:center;z-index:1}@media only screen and (max-width: 1024px){.container-earth{display:none}}.container-earth .earth{z-index:1;position:fixed;width:80%}.container-earth .earth g[id^=earth]{-webkit-animation:rotate-earth 100s linear infinite forwards;-moz-animation:rotate-earth 100s linear infinite forwards;-ms-animation:rotate-earth 100s linear infinite forwards;-o-animation:rotate-earth 100s linear infinite forwards;animation:rotate-earth 100s linear infinite forwards;transform-origin:center}.container-earth .earth g[id^=plane]{-webkit-animation:rotate-plane 20s linear infinite;-moz-animation:rotate-plane 20s linear infinite;-ms-animation:rotate-plane 20s linear infinite;-o-animation:rotate-plane 20s linear infinite;animation:rotate-plane 20s linear infinite;transform-origin:center}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3454:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".experience{display:flex;height:130px;max-width:1000px;min-width:1000px;margin-bottom:15px}@media only screen and (max-width: 1024px){.experience{max-width:unset;min-width:unset}}@media only screen and (max-width: 600px){.experience{flex-direction:column;height:auto}}.experience#reverse{flex-direction:row-reverse}@media only screen and (max-width: 600px){.experience#reverse{flex-direction:column}}.experience .paragraphly{width:calc(100% - 120px);background:#243150;padding:15px;display:flex;align-items:center;font-family:\"Montserrat-Thin\";font-size:.86rem}@media only screen and (max-width: 600px){.experience .paragraphly{width:auto}}.experience .company{display:flex;color:#000;flex-direction:column;align-items:center;width:120px;background:#fff}@media only screen and (max-width: 600px){.experience .company{flex-direction:row;width:100%;justify-content:space-around}}.experience .company h3{margin:0}.experience .company #fortyTwo{width:65px;padding:15px 15px 10px 15px}.experience .company #geekzie{width:65px;padding:15px 15px 10px 15px}.experience .company #redpelicans{width:65px;padding:15px 15px 10px 10px}.experience .company #europAssistance{width:80px;font-size:3em;padding:15px 5px 10px 5px}.experience .company #lrdg{width:75px;padding:15px 15px 10px 15px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2951:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#experiences{background:radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%);padding-bottom:25px}@media only screen and (max-width: 600px){#experiences{height:unset}}#experiences .wrapper-experiences{display:flex;flex-direction:column;justify-content:center;align-items:center;width:70%;margin-top:50px}@media only screen and (max-width: 1024px){#experiences .wrapper-experiences{width:95%}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer{display:flex;justify-content:center;align-items:center;background:#252525;color:#fff;padding:70px 0px 70px 0px;position:relative}footer .wrapper-footer{display:flex;justify-content:center;align-items:center;flex-direction:column}footer .wrapper-footer .icon-footer{display:flex;align-items:center;justify-content:space-evenly;width:300px}footer .wrapper-footer .icon-footer svg{font-size:2.5rem;color:#7c7c7c;padding-bottom:30px}footer .wrapper-footer .icon-footer svg:hover{transition:color .5s;color:#fff;cursor:pointer}footer .wrapper-footer .copyright{color:#7c7c7c;font-size:1rem}footer .scroll-top{display:flex;justify-content:center;align-items:center;position:absolute;top:-23px;right:calc(50% - 20px);font-size:1rem;background:#4e4f50;width:45px;height:45px;border-radius:100%;cursor:pointer}footer .scroll-top:hover{transition:all .2s ease-in-out;background:#566e8a}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#home{background:radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)}#home .banner{-webkit-animation:banner-anim 1s ease-in-out forwards;-moz-animation:banner-anim 1s ease-in-out forwards;-ms-animation:banner-anim 1s ease-in-out forwards;-o-animation:banner-anim 1s ease-in-out forwards;animation:banner-anim 1s ease-in-out forwards;animation-delay:.1s;width:100%;text-align:center;padding-top:200px;opacity:0;margin-bottom:50px}#home .banner h1{margin:0;font-size:3rem}@media only screen and (max-width: 1024px){#home .banner h1{font-size:2rem}}#home .banner h3{-webkit-animation:rotateY 1.1s ease-in-out forwards;-moz-animation:rotateY 1.1s ease-in-out forwards;-ms-animation:rotateY 1.1s ease-in-out forwards;-o-animation:rotateY 1.1s ease-in-out forwards;animation:rotateY 1.1s ease-in-out forwards;animation-delay:1s;width:100%;font-size:1.4rem;opacity:0}#home a,#home input{-webkit-animation:opacity-anim 1s ease-in-out forwards;-moz-animation:opacity-anim 1s ease-in-out forwards;-ms-animation:opacity-anim 1s ease-in-out forwards;-o-animation:opacity-anim 1s ease-in-out forwards;animation:opacity-anim 1s ease-in-out forwards;visibility:hidden;cursor:unset}#home input{height:45px;width:200px;font-family:\"Quicksand-Regular\";background:none;border:1px solid #fff;color:#fff;font-size:1rem;letter-spacing:2px;border-radius:3px;transition:all .3s;cursor:pointer;animation-delay:2s}#home input:hover{background:#fff;color:#000}#home .scroll-down{-webkit-animation:button-scroll-anim 1s infinite;-moz-animation:button-scroll-anim 1s infinite;-ms-animation:button-scroll-anim 1s infinite;-o-animation:button-scroll-anim 1s infinite;animation:button-scroll-anim 1s infinite;visibility:hidden;bottom:10%;position:absolute;width:60px;height:60px;margin:auto;z-index:1;right:0;left:0;cursor:pointer}#home .scroll-down span{display:flex;justify-content:center;align-items:center;background:#3d546c;width:100%;height:100%;border-radius:5px;font-size:1.5rem}@media only screen and (max-width: 1024px){#home .scroll-down{visibility:visible}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4092:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navBackground{background:#252525;transition:all .5s}nav:not(.button-scroll-reponsive){-webkit-animation:opacity-anim 1.5s linear forwards;-moz-animation:opacity-anim 1.5s linear forwards;-ms-animation:opacity-anim 1.5s linear forwards;-o-animation:opacity-anim 1.5s linear forwards;animation:opacity-anim 1.5s linear forwards;animation-delay:2s;font-size:.8rem;width:100%;text-transform:uppercase;letter-spacing:2px;z-index:2;position:fixed;height:60px;display:flex;align-items:center;visibility:hidden}@media only screen and (max-width: 600px){nav:not(.button-scroll-reponsive){height:50px;justify-content:space-between;background:#252525}}nav:not(.button-scroll-reponsive) .menuResponsive{-webkit-animation:rotateIconReverse 0.2s linear forwards;-moz-animation:rotateIconReverse 0.2s linear forwards;-ms-animation:rotateIconReverse 0.2s linear forwards;-o-animation:rotateIconReverse 0.2s linear forwards;animation:rotateIconReverse 0.2s linear forwards;margin:0px 20px;font-size:1.5rem;display:none}@media only screen and (max-width: 600px){nav:not(.button-scroll-reponsive) .menuResponsive{display:flex}}nav:not(.button-scroll-reponsive) .menuResponsive.toggleMenu{-webkit-animation:rotateIcon 0.2s linear forwards;-moz-animation:rotateIcon 0.2s linear forwards;-ms-animation:rotateIcon 0.2s linear forwards;-o-animation:rotateIcon 0.2s linear forwards;animation:rotateIcon 0.2s linear forwards}nav:not(.button-scroll-reponsive) .flag{width:45px;height:25px;padding-left:25px;cursor:pointer}@media only screen and (max-width: 600px){nav:not(.button-scroll-reponsive) .flag{padding-left:15px;width:35px;height:25px}}nav:not(.button-scroll-reponsive) ul{display:flex;justify-content:center;align-items:center;padding:0;margin:0;list-style:none;width:100%;padding-right:70px}nav:not(.button-scroll-reponsive) ul.toggleMenu{-webkit-animation:toggle-menu 0.5s forwards;-moz-animation:toggle-menu 0.5s forwards;-ms-animation:toggle-menu 0.5s forwards;-o-animation:toggle-menu 0.5s forwards;animation:toggle-menu 0.5s forwards;position:absolute;background:#252525;height:100vh;top:50px;flex-flow:column;width:50%;align-items:start;display:flex;justify-content:start;padding-top:25px}@media only screen and (max-width: 600px){nav:not(.button-scroll-reponsive) ul{padding-right:0px;display:none}}nav:not(.button-scroll-reponsive) ul li{margin:0px 30px 0px 30px;cursor:pointer;font-family:\"Quicksand-Regular\";position:relative}@media only screen and (max-width: 600px){nav:not(.button-scroll-reponsive) ul li{width:100%;cursor:pointer;position:relative;font-size:1rem;padding:25px 20px;margin:0}nav:not(.button-scroll-reponsive) ul li:hover{transition:none !important;transform:none !important}}nav:not(.button-scroll-reponsive) ul li.nav-active{color:#65b4ff}nav:not(.button-scroll-reponsive) ul li.nav-active:after{content:\"\";display:block;width:8px;height:8px;position:absolute;top:20px;left:calc(50% - 5px);background:#65b4ff;border-radius:500px}@media only screen and (max-width: 600px){nav:not(.button-scroll-reponsive) ul li.nav-active:after{content:none}}nav:not(.button-scroll-reponsive) ul li:hover{transition:transform .2s ease-in-out;transform:scale(1.1)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#skills{background:radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)}#skills .container-skills{margin-top:20px}#skills .container-skills .skill-item{flex-direction:column;background:#242d38;width:100px;font-family:\"Quicksand-Regular\";border-radius:3px;font-size:.9rem;margin:.4%;padding:8px}@media only screen and (max-width: 600px){#skills .container-skills .skill-item{margin:1px;padding:3px}}#skills .container-skills .wrapper-skills,#skills .container-skills div{display:flex;align-items:center;flex-wrap:wrap;max-width:1000px;margin-bottom:15px}@media only screen and (max-width: 1024px){#skills .container-skills .wrapper-skills,#skills .container-skills div{justify-content:center}}#skills .container-skills .wrapper-skills h2,#skills .container-skills div h2{font-family:\"Quicksand-Italic\";font-size:1.2rem}#skills .container-skills .wrapper-skills img,#skills .container-skills div img{width:5%;margin-left:2%;margin-right:2%;min-width:40px;max-width:45px;height:50px}@media only screen and (max-width: 600px){#skills .container-skills .wrapper-skills img,#skills .container-skills div img{min-width:40px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title-fade{-webkit-animation:fadeInLeft 1s ease-in-out forwards;-moz-animation:fadeInLeft 1s ease-in-out forwards;-ms-animation:fadeInLeft 1s ease-in-out forwards;-o-animation:fadeInLeft 1s ease-in-out forwards;animation:fadeInLeft 1s ease-in-out forwards}.title_hidden{height:50px}.title{margin:0;font-size:1.8rem;text-transform:uppercase;font-family:\"Poppins-Light\";position:relative;letter-spacing:5px}@media only screen and (max-width: 1024px){.title{padding-top:80px}.title:before,.title:after{top:82% !important}}@media only screen and (max-width: 600px){.title{padding-top:60px;font-size:1rem}}.title:before,.title:after{content:\"\";height:2px;position:absolute;width:0%;background-color:#a32039;top:20px}.title:before{-webkit-animation:lineAnim 0.5s ease-in forwards;-moz-animation:lineAnim 0.5s ease-in forwards;-ms-animation:lineAnim 0.5s ease-in forwards;-o-animation:lineAnim 0.5s ease-in forwards;animation:lineAnim 0.5s ease-in forwards;margin-left:-110px;animation-delay:.9s}.title:after{-webkit-animation:lineAnim 1s ease-out forwards;-moz-animation:lineAnim 1s ease-out forwards;-ms-animation:lineAnim 1s ease-out forwards;-o-animation:lineAnim 1s ease-out forwards;animation:lineAnim 1s ease-out forwards;margin-left:27px;animation-delay:1.5s}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_font_Quicksand_Regular_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9784);
/* harmony import */ var _assets_font_Quicksand_Italic_otf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6770);
/* harmony import */ var _assets_font_Poppins_Light_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1773);
/* harmony import */ var _assets_font_Montserrat_Thin_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3156);
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_font_Quicksand_Regular_otf__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_font_Quicksand_Italic_otf__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_font_Poppins_Light_ttf__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_font_Montserrat_Thin_ttf__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face{font-family:\"Quicksand-Regular\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}@font-face{font-family:\"Quicksand-Italic\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}@font-face{font-family:\"Poppins-Light\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}@font-face{font-family:\"Montserrat-Thin\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}@-webkit-keyframes banner-anim{from{transform:translateY(0px);opacity:0}to{transform:translateY(20px);opacity:1}}@-moz-keyframes banner-anim{from{transform:translateY(0px);opacity:0}to{transform:translateY(20px);opacity:1}}@-ms-keyframes banner-anim{from{transform:translateY(0px);opacity:0}to{transform:translateY(20px);opacity:1}}@-o-keyframes banner-anim{from{transform:translateY(0px);opacity:0}to{transform:translateY(20px);opacity:1}}@keyframes banner-anim{from{transform:translateY(0px);opacity:0}to{transform:translateY(20px);opacity:1}}@-webkit-keyframes block-overflow{0%{overflow:hidden}99%{overflow:hidden}100%{overflow:unset}}@-moz-keyframes block-overflow{0%{overflow:hidden}99%{overflow:hidden}100%{overflow:unset}}@-ms-keyframes block-overflow{0%{overflow:hidden}99%{overflow:hidden}100%{overflow:unset}}@-o-keyframes block-overflow{0%{overflow:hidden}99%{overflow:hidden}100%{overflow:unset}}@keyframes block-overflow{0%{overflow:hidden}99%{overflow:hidden}100%{overflow:unset}}@-webkit-keyframes opacity-anim{from{opacity:0}to{opacity:1;visibility:visible}}@-moz-keyframes opacity-anim{from{opacity:0}to{opacity:1;visibility:visible}}@-ms-keyframes opacity-anim{from{opacity:0}to{opacity:1;visibility:visible}}@-o-keyframes opacity-anim{from{opacity:0}to{opacity:1;visibility:visible}}@keyframes opacity-anim{from{opacity:0}to{opacity:1;visibility:visible}}@-webkit-keyframes button-scroll-anim{0%{transform:translateY(10px)}50%{transform:translateY(20px)}100%{transform:translateY(10px)}}@-moz-keyframes button-scroll-anim{0%{transform:translateY(10px)}50%{transform:translateY(20px)}100%{transform:translateY(10px)}}@-ms-keyframes button-scroll-anim{0%{transform:translateY(10px)}50%{transform:translateY(20px)}100%{transform:translateY(10px)}}@-o-keyframes button-scroll-anim{0%{transform:translateY(10px)}50%{transform:translateY(20px)}100%{transform:translateY(10px)}}@keyframes button-scroll-anim{0%{transform:translateY(10px)}50%{transform:translateY(20px)}100%{transform:translateY(10px)}}@-webkit-keyframes rotate-plane{0%{transform:rotate(-90deg)}100%{transform:rotate(100deg)}}@-moz-keyframes rotate-plane{0%{transform:rotate(-90deg)}100%{transform:rotate(100deg)}}@-ms-keyframes rotate-plane{0%{transform:rotate(-90deg)}100%{transform:rotate(100deg)}}@-o-keyframes rotate-plane{0%{transform:rotate(-90deg)}100%{transform:rotate(100deg)}}@keyframes rotate-plane{0%{transform:rotate(-90deg)}100%{transform:rotate(100deg)}}@-webkit-keyframes rotate-earth{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}@-moz-keyframes rotate-earth{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}@-ms-keyframes rotate-earth{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}@-o-keyframes rotate-earth{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}@keyframes rotate-earth{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}@-webkit-keyframes earth-appear-anim{from{opacity:0}to{opacity:1}}@-moz-keyframes earth-appear-anim{from{opacity:0}to{opacity:1}}@-ms-keyframes earth-appear-anim{from{opacity:0}to{opacity:1}}@-o-keyframes earth-appear-anim{from{opacity:0}to{opacity:1}}@keyframes earth-appear-anim{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInLeft{0%{opacity:0;transform:translate(-100px, 0%)}100%{opacity:1;transform:translate(0px, 0%)}}@-moz-keyframes fadeInLeft{0%{opacity:0;transform:translate(-100px, 0%)}100%{opacity:1;transform:translate(0px, 0%)}}@-ms-keyframes fadeInLeft{0%{opacity:0;transform:translate(-100px, 0%)}100%{opacity:1;transform:translate(0px, 0%)}}@-o-keyframes fadeInLeft{0%{opacity:0;transform:translate(-100px, 0%)}100%{opacity:1;transform:translate(0px, 0%)}}@keyframes fadeInLeft{0%{opacity:0;transform:translate(-100px, 0%)}100%{opacity:1;transform:translate(0px, 0%)}}@-webkit-keyframes rotateY{0%{opacity:0;transform:rotate3d(1, 1, 1, 15deg)}100%{opacity:1;transform:rotate3d(1, 1, 1, 0deg)}}@-moz-keyframes rotateY{0%{opacity:0;transform:rotate3d(1, 1, 1, 15deg)}100%{opacity:1;transform:rotate3d(1, 1, 1, 0deg)}}@-ms-keyframes rotateY{0%{opacity:0;transform:rotate3d(1, 1, 1, 15deg)}100%{opacity:1;transform:rotate3d(1, 1, 1, 0deg)}}@-o-keyframes rotateY{0%{opacity:0;transform:rotate3d(1, 1, 1, 15deg)}100%{opacity:1;transform:rotate3d(1, 1, 1, 0deg)}}@keyframes rotateY{0%{opacity:0;transform:rotate3d(1, 1, 1, 15deg)}100%{opacity:1;transform:rotate3d(1, 1, 1, 0deg)}}@-webkit-keyframes lineAnim{0%{width:0px}100%{width:80px}}@-moz-keyframes lineAnim{0%{width:0px}100%{width:80px}}@-ms-keyframes lineAnim{0%{width:0px}100%{width:80px}}@-o-keyframes lineAnim{0%{width:0px}100%{width:80px}}@keyframes lineAnim{0%{width:0px}100%{width:80px}}@-webkit-keyframes rotateIcon{0%{transform:rotate(0deg)}100%{transform:rotate(-90deg)}}@-moz-keyframes rotateIcon{0%{transform:rotate(0deg)}100%{transform:rotate(-90deg)}}@-ms-keyframes rotateIcon{0%{transform:rotate(0deg)}100%{transform:rotate(-90deg)}}@-o-keyframes rotateIcon{0%{transform:rotate(0deg)}100%{transform:rotate(-90deg)}}@keyframes rotateIcon{0%{transform:rotate(0deg)}100%{transform:rotate(-90deg)}}@-webkit-keyframes rotateIconReverse{0%{transform:rotate(-90deg)}100%{transform:rotate(0deg)}}@-moz-keyframes rotateIconReverse{0%{transform:rotate(-90deg)}100%{transform:rotate(0deg)}}@-ms-keyframes rotateIconReverse{0%{transform:rotate(-90deg)}100%{transform:rotate(0deg)}}@-o-keyframes rotateIconReverse{0%{transform:rotate(-90deg)}100%{transform:rotate(0deg)}}@keyframes rotateIconReverse{0%{transform:rotate(-90deg)}100%{transform:rotate(0deg)}}@-webkit-keyframes toggle-menu{0%{right:100%}100%{right:50%;display:flex}}@-moz-keyframes toggle-menu{0%{right:100%}100%{right:50%;display:flex}}@-ms-keyframes toggle-menu{0%{right:100%}100%{right:50%;display:flex}}@-o-keyframes toggle-menu{0%{right:100%}100%{right:50%;display:flex}}@keyframes toggle-menu{0%{right:100%}100%{right:50%;display:flex}}*{-webkit-tap-highlight-color:rgba(0,0,0,0)}#element::-webkit-scrollbar{display:none}::-webkit-scrollbar{display:none}html,body{font-family:\"Quicksand-Regular\";font-size:100%;height:100%;width:100%}#root{height:100%;width:100%}body{color:#fff;background:#252525;margin:0;padding:0;animation:block-overflow 2s;height:100%;width:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e8ecb9f79ef9cbd2d9a81fd4ee62c111.ttf");

/***/ }),

/***/ 1773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f41b63c0bb0963ace821a2b99458c1cd.ttf");

/***/ }),

/***/ 6770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4389c94857aa7e332cab42105af02f87.otf");

/***/ }),

/***/ 9784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1a8cbf2a0b04da5410e225936c31c655.otf");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkarnaudlefloch_io"] = self["webpackChunkarnaudlefloch_io"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [645], () => (__webpack_require__(456)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;