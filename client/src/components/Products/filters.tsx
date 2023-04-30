import React from "react";
import { Products } from ".";
import { FiltersProps } from "../../types/Types";

const Filters = ({ product }: FiltersProps) => {
  let filtrCount: string[] = product.filters
    ? Object.keys(product.filters)
    : [];
  let filtrData: Array<string[]> = product.filters
    ? Object.values(product.filters)
    : [];
  return (
    <>
      {filtrCount.length && filtrData.length
        ? filtrCount.map((item, id) => (
            <Products.F_Section key={id}>
              <Products.F_Name>{item}</Products.F_Name>
              {item === filtrCount[0]
                ? filtrData[0].map((it, id) => (
                    <Products.F_List key={id}>
                      <Products.F_Element>
                        <Products.F_Choose>
                          {it}
                          <Products.F_Checkbox type="checkbox" />
                          <Products.F_Checkmark></Products.F_Checkmark>
                        </Products.F_Choose>
                      </Products.F_Element>
                    </Products.F_List>
                  ))
                : filtrData[1].map((it, id) => (
                    <Products.F_List key={id}>
                      <Products.F_Element>
                        <Products.F_Choose>
                          {it}
                          <Products.F_Checkbox type="checkbox" />
                          <Products.F_Checkmark></Products.F_Checkmark>
                        </Products.F_Choose>
                      </Products.F_Element>
                    </Products.F_List>
                  ))}
            </Products.F_Section>
          ))
        : null}
    </>
  );
};

export default Filters;
