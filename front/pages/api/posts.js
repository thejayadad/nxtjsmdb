// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose from "mongoose"
import {connectToDataBase} from "../../api-helpers/utils"
import {getAllPosts} from "../../api-helpers/controllers/postController.js"

export default async function handler(req, res) {
  await connectToDataBase();

  if(req.method === "GET"){
     return getAllPosts(req, res);
  }
}
