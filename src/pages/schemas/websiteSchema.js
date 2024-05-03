const websiteSchema = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "WebSite",
 name: "Al Muqayseh",
 url: "https://almuqayseh.com",
 description:
  "At Al-Muqayseh Gen Cont Est., we're man power specialists. With a commitment to excellence and innovation, we forge partnerships for lasting impact.",
 image: {
  "@type": "ImageObject",
  url: "https://almuqayseh.com/images/logo/logo.jpg",
  width: 800,
  height: 800,
 },
 publisher: {
  "@type": "WebSite",
  name: "Al Muqayseh Gen Cont Est.",
  logo: {
   "@type": "ImageObject",
   url: "https://almuqayseh.com/images/logo/logo.jpg",
  },
 },
});

export default websiteSchema;
