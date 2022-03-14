import React, { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import HipchatChevronDownIcon from "@atlaskit/icon/glyph/hipchat/chevron-down";

import { Language } from "@/app/global";
import Accordion from "@/components/accordion";
import Loader from "@/components/loader";
import NoContent from "@/components/no-content";
import Product from "@/components/product";
import ScrollUp from "@/components/scroll-up";
import Main from "@/layout/main";
import Carousel, { CarouselDataProps } from "@/widgets/carousel";

import { CategoriesResponse, LanguagesResponse } from "./types";
import * as Styled from "./Home.styled";

const Home: NextPage = () => {
  const [categories, setCategories] = useState<CategoriesResponse>([]);
  const [languages, setLanguages] = useState<LanguagesResponse>([]);
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

  const getCategories = useCallback((): void => {
    if (refreshCount >= 0) {
      fetch(
        `${process.env.NEXT_APP_API}category?language=${localStorage.getItem(
          "language"
        )}`,
        {
          method: "GET",
        }
      )
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

  useEffect((): void => {
    fetch(`${process.env.NEXT_APP_API}slider`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setSliderData(data))
      .catch((error) => console.log(error));

    fetch(`${process.env.NEXT_APP_API}language`)
      .then((response) => response.json())
      .then((data) => setLanguages(data))
      .catch((error) => console.log(error));

    localStorage.setItem("language", Language.Tr);
  }, []);

  return categories && sliderData ? (
    <Main title="Orient by G.K.">
      {sliderData.length > 0 ? (
        <Carousel data={sliderData} />
      ) : (
        <NoContent message="Slider verisi bulunamadı" />
      )}

      <Styled.Lang>
        <Styled.Detail>
          <b>Menü</b>
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
                {languages.length > 0 ? (
                  <Styled.LangButton onClick={selectLang}>TR</Styled.LangButton>
                ) : null}
                {languages &&
                  languages.map((language, index) => (
                    <Styled.LangButton key={index} onClick={selectLang}>
                      {language.language}
                    </Styled.LangButton>
                  ))}
              </Styled.Dropdown>
            )}
          </Styled.Langs>
        </Styled.Detail>
      </Styled.Lang>

      <Styled.Gutter>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <Accordion
              key={index}
              color={category.color}
              title={category.title}
            >
              <Styled.Gutter>
                {category.products &&
                  category.products.map((product, productIndex) => (
                    <Product
                      key={productIndex}
                      color={category.color}
                      href={`/product/${product.id}`}
                      px={24}
                      title={product.title}
                    />
                  ))}
                {category.subCategories?.map(
                  (subCategory, subCategoryIndex) => (
                    <Accordion
                      key={subCategoryIndex}
                      color={
                        subCategory.color ? subCategory.color : category.color
                      }
                      title={subCategory.title}
                    >
                      <Styled.Gutter>
                        {subCategory.products.map((product, productIndex) => (
                          <Product
                            key={productIndex}
                            color={
                              subCategory.color
                                ? subCategory.color
                                : category.color
                            }
                            href={`/product/${product.id}`}
                            px={48}
                            title={product.title}
                          />
                        ))}
                      </Styled.Gutter>
                    </Accordion>
                  )
                )}
              </Styled.Gutter>
            </Accordion>
          ))
        ) : (
          <NoContent message="Kategori verisi bulunamadı" />
        )}
      </Styled.Gutter>

      <ScrollUp />
    </Main>
  ) : (
    <Loader />
  );
};

export default Home;
