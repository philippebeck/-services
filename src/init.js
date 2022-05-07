"mode strict";

import axios from "axios"

const constants = import("/src/script/constants")
  .then((data) => { return data })
