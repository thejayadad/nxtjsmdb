// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose from "mongoose"
import {connectToDataBase} from "../../api-helpers/utils"

export default async function handler(req, res) {
  await connectToDataBase();
}
