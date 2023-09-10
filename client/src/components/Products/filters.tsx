import React, { useEffect, useState } from "react";
import { Products } from ".";
import { FiltersProps } from "../../types/Types";
import { useParams } from "react-router-dom";

const Filters = ({ product, setfilters, filters, ShowProd }: FiltersProps) => {
  let { category } = useParams();
  let { search } = useParams();
  const [searchFilters, setSearchFilters] = useState([[""]]);
  let filtrCount: string[] = FiltrCountHandle();
  let filtrData: Array<string[]> = SearchFilter();

  function FiltrCountHandle() {
    if (!category) return ["Producent"];
    if (!product.filters) return [];
    return Object.keys(product.filters);
  }

  function FiltrDataHandle() {
    if (!category) return searchFilters;
    if (!product.filters) return [];
    return Object.values(product.filters);
  }

  function SearchFilter() {
    let data = FiltrDataHandle();
    if (search) {
      let uniqueFilters = searchFilters[0].filter(
        (item, index) => searchFilters[0].indexOf(item) === index
      );
      data[0] = uniqueFilters;
    }
    return data;
  }
  useEffect(() => {
    if (search) {
      const Searchdata = product.products.filter((item) =>
        item.name.toLowerCase().includes(search ? search.toLowerCase() : "")
      );
      setSearchFilters([
        Object.values(Searchdata.map((item) => item.producer)),
      ]);
    }
  }, [search, filters, ShowProd]);
  useEffect(() => {
    if (search && searchFilters[0][0] !== "" && searchFilters[0].length > 0) {
      setfilters((prev) => ({
        ...prev,
        filtr_one: [searchFilters[0][0]],
      }));
    }
  }, [search]);

  function SelectFilter(
    item: string,
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    if (item === "Producent") {
      setfilters((prev) =>
        prev.filtr_one.includes(e.target.name)
          ? {
              ...prev,
              filtr_one: prev.filtr_one.filter(
                (item) => item !== e.target.name
              ),
            }
          : {
              ...prev,
              filtr_one: [...prev.filtr_one, e.target.name],
            }
      );
    }
    if (item !== "Producent") {
      setfilters((prev) =>
        prev.filtr_two.includes(e.target.name)
          ? {
              ...prev,
              filtr_two: prev.filtr_two.filter(
                (item) => item !== e.target.name
              ),
            }
          : {
              ...prev,
              filtr_two: [...prev.filtr_two, e.target.name],
            }
      );
    }
  }
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
                              filtrData[0][0] !== "" &&
                              filtrData[0].length === 1
                                ? true
                                : item === "Producent"
                                ? filters.filtr_one.includes(it)
                                : filters.filtr_two.includes(it)
                            }
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => SelectFilter(item, e)}
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
