import { gql, useMutation, useQuery } from "@apollo/client";

const getJsonDataKey = gql`
  query getJsonDataKey($key: String!) {
    getJsonDataKey(key: $key) {
      key
      value
    }
  }
`;

const setJsonDataKey = gql`
  mutation setJsonDataKey($key: String!, $value: Json!) {
    setJsonDataKey(key: $key, value: $value) {
      key
      value
    }
  }
`;

export const useJsonData = <T>(key: string) => {
  const { data, refetch } = useQuery(getJsonDataKey, {
    variables: { key: key },
  });
  const [setKey] = useMutation(setJsonDataKey);

  const update = (value: T) => {
    setKey({
      variables: {
        key: key,
        value: JSON.stringify(value),
      },
    }).then(() => {
      refetch();
    });
  };

  return {
    data: data?.getJsonDataKey?.value
      ? (JSON.parse(data?.getJsonDataKey?.value) as T)
      : undefined,
    refetch,
    update,
  };
};
