
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.save = function(req, res){
  console.log("Your scores: " + req.url); // p.43
  scores.push(req.query.scores);

  console.log("[SERVER] Your scores: " + scores); 
};