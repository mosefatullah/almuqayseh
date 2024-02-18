import ghpages from "gh-pages";

var callback = function (err) {
 if (err) {
  console.log(err);
 } else {
  console.log("Published!");
 }
};
ghpages.publish("dist", { cname: "almuqayseh.com" }, callback);
