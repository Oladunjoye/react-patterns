export const nestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

const isObject = (data: any) => typeof data === "object" && data != null;

export const RecursiveComponent = ({ data }: any) => {
  if (!isObject(data)) return <li>{data}</li>;

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, val]) => {
        return (
          <li>
            {key}:
            <ul>
              <RecursiveComponent data={val} />
            </ul>
          </li>
        );
      })}
    </>
  );
};
