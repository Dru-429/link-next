import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("linknext");
  const collection = db.collection("links");

  //Checkers
  //1. if the handel already in used
  const check_handeler = await collection.findOne({ handler: body.handler });
  if (check_handeler) {
    return Response.json({
      success: false,
      error: "true",
      message: "Handel already claimed :(",
      result: "null",
    });
    // return error("Handel already claimed :(");
  }

  //2. if the link or pic is not a url as "https"
  const check_links = await body.links
  check_links.map( (item, index) => {
    if (index.link.include("https://")){
        return Response.json({
            success: false,
            error: "true",
            message: "Enter a valid link url :(",
            result: "null",
        });
    }
  })

  const result = await collection.insertOne(body);

  return Response.json({
    success: true,
    error: "false",
    message: "Your LinkNext has been generated ",
    result: result,
  });
}
