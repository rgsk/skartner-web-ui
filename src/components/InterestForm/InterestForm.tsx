"use client";

import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

interface InterestFormProps {}
const InterestForm: React.FC<InterestFormProps> = ({}) => {
  const { loading, error, data } = useQuery(getJsonDataKey, {
    variables: { key: "hii" },
  });
  useEffect(() => {
    console.log({ data });
  }, [data]);
  return <div>InterestForm</div>;
};
export default InterestForm;

const getJsonDataKey = gql`
  query getJsonDataKey($key: String!) {
    getJsonDataKey(key: $key) {
      key
      value
    }
  }
`;
