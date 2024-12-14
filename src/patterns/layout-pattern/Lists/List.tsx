import { ElementType } from "react";

type ListProps = {
  ItemComponent: ElementType;
  items: any[];
  sourceName: string;
};
export const List = ({ ItemComponent, items, sourceName }: ListProps) => {
  return (
    <>
      {items.map((item, i) => {
        const itemProps = { [sourceName]: item };
        console.log(itemProps);
        return <ItemComponent key={i} {...itemProps} />;
      })}
    </>
  );
};
