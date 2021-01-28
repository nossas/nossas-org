import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withApollo } from "../lib";

const widgetsQuery = gql`
  query($filter: mobilizations_bool_exp!) {
    widgets(
      where: { block: { mobilization: $filter } }
      order_by: { id: asc }
    ) {
      id
      kind
      goal
      settings
      block_id
      created_at
      updated_at
      sm_size
      md_size
      lg_size
      activist_pressures_aggregate {
        aggregate {
          count
        }
      }

      form_entries_aggregate {
        aggregate {
          count
        }
      }
      donations_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

const FetchComponent = () => {
  const { loading, error, data } = useQuery(widgetsQuery, {
    variables: { filter: { slug: { _eq: "teste-widgets" } } },
  });

  console.log("fetch", { loading, error, data });
  return (
    <div>
      <p>Ole ole ola</p>
    </div>
  );
};

const About = () => {
  return (
    <>
      <h1>About</h1>
      <FetchComponent />
    </>
  );
};

export default withApollo()(About);
