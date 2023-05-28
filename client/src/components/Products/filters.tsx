import React, { useEffect } from "react";
import { Products } from ".";
import { FiltersProps } from "../../types/Types";
import { useParams } from "react-router-dom";

const Filters = ({ product, setfilters, filters, ShowProd }: FiltersProps) => {
  let { category } = useParams();
  let { search } = useParams();

  let filtrCount: string[] = category
    ? product.filters
      ? Object.keys(product.filters)
      : []
    : ["Producent"];

  let filtrData: Array<string[]> = category
    ? product.filters
      ? Object.values(product.filters)
      : []
    : [Object.values(ShowProd.map((item) => item.producer))];

  if (search) {
    let filters = filtrData[0].filter(
      (el, index) => filtrData[0].indexOf(el) === index
    );
    filtrData[0] = filters;
  }

  useEffect(() => {
    if (search && filtrData[0].length === 1) {
      setfilters((prev) => ({
        ...prev,
        filtr_one: [filtrData[0][0]],
      }));
    }
  }, [search, ShowProd, filtrData]);

  return (
    <>
      {filtrCount.length && filtrData.length
        ? filtrCount.map((item, id) => (
            <Products.F_Section key={id}>
              <Products.F_Name>{item}</Products.F_Name>
              {item === filtrCount[id]
                ? filtrData[id].map((it, id) => (
                    <Products.F_List key={id}>
                      <Products.F_Element>
                        <Products.F_Choose>
                          {it}
                          <Products.F_Checkbox
                            name={it}
                            type="checkbox"
                            checked={
                              item === "Producent"
                                ? filters.filtr_one.includes(it)
                                : filters.filtr_two.includes(it)
                            }
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              item === "Producent"
                                ? setfilters((prev) =>
                                    prev.filtr_one.includes(e.target.name)
                                      ? {
                                          ...prev,
                                          filtr_one: prev.filtr_one.filter(
                                            (item) => item !== e.target.name
                                          ),
                                        }
                                      : {
                                          ...prev,
                                          filtr_one: [
                                            ...prev.filtr_one,
                                            e.target.name,
                                          ],
                                        }
                                  )
                                : setfilters((prev) =>
                                    prev.filtr_two.includes(e.target.name)
                                      ? {
                                          ...prev,
                                          filtr_two: prev.filtr_two.filter(
                                            (item) => item !== e.target.name
                                          ),
                                        }
                                      : {
                                          ...prev,
                                          filtr_two: [
                                            ...prev.filtr_two,
                                            e.target.name,
                                          ],
                                        }
                                  )
                            }
                          />
                          <Products.F_Checkmark></Products.F_Checkmark>
                        </Products.F_Choose>
                      </Products.F_Element>
                    </Products.F_List>
                  ))
                : null}
            </Products.F_Section>
          ))
        : null}
    </>
  );
};

export default Filters;
