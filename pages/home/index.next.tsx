import React, { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import HipchatChevronDownIcon from "@atlaskit/icon/glyph/hipchat/chevron-down";

import { Language } from "@/app/global";
import Accordion from "@/components/accordion";
import Loader from "@/components/loader";
import Product from "@/components/product";
import ScrollUp from "@/components/scroll-up";
import Main from "@/layout/main";
import Carousel, { CarouselDataProps } from "@/widgets/carousel";

import { CategoriesResponse } from "./types";
import * as Styled from "./Home.styled";

const Home: NextPage = () => {
  const [categories, setCategories] = useState<CategoriesResponse>([]);
  const [sliderData, setSliderData] = useState<Array<CarouselDataProps>>([]);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [lang, setLang] = useState<Language>(Language.Tr);

  const [refreshCount, setRefreshCount] = useState<number>(0);

  const setLanguage = (activeLang: Language): void => {
    setLang(activeLang);
    localStorage.setItem("language", activeLang);
    setRefreshCount((c) => c + 1);
  };

  const selectLang = useCallback((): void => {
    if (localStorage.getItem("language") === Language.Tr) {
      setLanguage(Language.Eng);
    } else {
      setLanguage(Language.Tr);
    }
  }, []);

  useEffect((): void => {
    fetch(`${process.env.NEXT_APP_API}slider`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setSliderData(data);
      })
      .catch((error) => {
        console.log(error);
      });

    localStorage.setItem("language", Language.Tr);
  }, []);

  const getCategories = useCallback((): void => {
    if (refreshCount >= 0) {
      fetch(`${process.env.NEXT_APP_API}category?language=${localStorage.getItem('language')}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [refreshCount]);

  useEffect((): void => getCategories(), [getCategories]);

  return categories && categories.length > 0 ? (
    <Main title="Orient by G.K.">
      {sliderData ? <Carousel data={sliderData} /> : null}

      <Styled.Lang>
        <Styled.Detail>
          <p>Menü</p>
          <Styled.Langs onClick={() => setIsActive(!isActive)}>
            <p>{lang}</p>
            <Styled.Arrow isActive={isActive}>
              <HipchatChevronDownIcon
                label="chevron-down"
                primaryColor="#2f5143"
                size="medium"
              />
            </Styled.Arrow>
            {isActive && (
              <Styled.Dropdown>
                <Styled.LangButton onClick={selectLang}>
                  {lang === Language.Tr ? Language.Eng : Language.Tr}
                </Styled.LangButton>
              </Styled.Dropdown>
            )}
          </Styled.Langs>
        </Styled.Detail>
      </Styled.Lang>

      <Styled.Gutter>
        {categories.map((category, index) => (
          <Accordion key={index} color={category.color} title={category.title}>
            <Styled.Gutter>
              {category.products &&
                category.products.map((product, productIndex) => (
                  <Product
                    key={productIndex}
                    color={category.color}
                    href={`/product/${product.id}`}
                    price="85"
                    title={product.title}
                  />
                ))}
              {category.subCategories?.map((subCategory, subCategoryIndex) => (
                <Accordion
                  key={subCategoryIndex}
                  color={category.color}
                  title={subCategory.title}
                >
                  <Styled.Gutter>
                    {subCategory.products.map((product, productIndex) => (
                      <Product
                        key={productIndex}
                        color={category.color}
                        href={`/product/${product.id}`}
                        price="85"
                        title={product.title}
                      />
                    ))}
                  </Styled.Gutter>
                </Accordion>
              ))}
            </Styled.Gutter>
          </Accordion>
        ))}
      </Styled.Gutter>

      <ScrollUp color="#2f5143" />
    </Main>
  ) : (
    <Loader />
  );
};

export default Home;
