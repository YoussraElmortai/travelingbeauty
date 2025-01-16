import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query treatment {
      treatments {
        title
        description
        price
        id
      }
    }
  `;

  return await hygraph.request(query);
}
