const navData = [
  {
    key: 1,
    name: "About",
    route: "#",
  },
  {
    key: 2,
    name: "Category",
    route: "#",
  },
  {
    key: 3,
    name: "Services",
    route: "#",
  },
  {
    key: 4,
    name: "Colours",
    route: "#",
  },
  {
    key: 5,
    name: "Downloads",
    route: "#",
  },
  {
    key: 6,
    name: "Become a Dealer",
    route: "#",
  },
  {
    key: 7,
    name: "Blogs",
    route: "#",
  },
  {
    key: 8,
    name: "Contact",
    route: "#",
  },
];

const query = `{
    pages(where: {name: "Homepage"}) {
      nodes {
        homepage {
          banners {
            bannerImage {
              node {
                sourceUrl
              }
            }
            bannersTitle
            bannerDescription
            bannerButton {
              title
              url
              target
            }
          }
          homeAboutTitle
          homeAboutSubtitle
          homeAboutButton {
            target
            title
            url
          }
          homeAboutVideoImage {
            node {
              sourceUrl
            }
          }
          homeAboutVideoUrl
          homeAboutDescription
          homeCategoryTitle
          homeCategorySubtitle
          homeServicesTitle
          homeServicesSubtitle
          homeColoursTitle
          homeColoursSubtitle
          homeColoursButton {
            target
            title
            url
          }
          homeJoinBackgroundImage {
            node {
              sourceUrl
            }
          }
          homeJoinTitle
          homeJoinSubtitle
          homeJoinButton {
            target
            title
            url
          }
          homeJoinDescription
          blogTitle
          blogSubtitle
          categories {
            link
            title
            image {
              node {
                sourceUrl
              }
            }
          }
        }
        seo {
          canonical
          metaKeywords
          metaDesc
          title
          opengraphType
          opengraphSiteName
          opengraphTitle
          opengraphDescription
          opengraphUrl
          schema {
            raw
          }
          opengraphImage {
            mediaItemUrl
          }
        }
      }
    }
    allColourCategory(where: {slug: "popular"}) {
      nodes {
        name
        colours {
          nodes {
            title
            slug
            colourInfo {
              selectColor
              colourRgb
            }
          }
        }
      }
    }
    blogs {
      nodes {
        featuredImage {
          node {
            sourceUrl
            slug
          }
        }
        slug
        title
        date
      }
    }
  }`;

const colorsList = [
  { id: 1, name: "Light Pink", code: "#FFB6C1" },
  { id: 2, name: "Light Blue", code: "#ADD8E6" },
  { id: 3, name: "Light Green", code: "#90EE90" },
  { id: 4, name: "Lavender", code: "#E6E6FA" },
  { id: 5, name: "Peach", code: "#FFDAB9" },
  { id: 6, name: "Mint", code: "#F5FFFA" },
];

export { navData, query, colorsList };
